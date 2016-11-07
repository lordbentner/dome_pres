  var app = {
 inser_SL:function(str) {  
    var SL = new Array(100);
    var t;                                           
    var j=0;
    for (var i = 6; i < str.length; i++)
    {
      j=(i-5)*4;
      SL[i-6] = str.substr(j-1,4);
    }
    return SL;      
  },
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
       var resultat = document.getElementById('resultat');
       var etat = document.getElementById('etat');
       var reception = document.getElementById('reception');
       var marche = document.getElementById('test_write');
       var deco = document.getElementById('deco');
        var send_base = document.getElementById('send_base');
        var connect = document.getElementById('connect');
       var bt = document.getElementById('bt');
       var dt = document.getElementById('dt');
       var tt = document.getElementById('tt');
       var tet = document.getElementById('tet');
       var pt = document.getElementById('pt');
     
        bluetoothSerial.connect("00:12:F3:28:87:6A", //connexion du dome
             function() { 
                etat.innerHTML = "connection réussie";
                marche.disabled = false;
                deco.disabled = false;
                connect.disabled = true;
                send_base.disabled = false;
            },
             function() { 
                resultat.innerHTML = "device not connected";
            }
            );
      },

    commande_perso:function(adr) {//personaliser les temperatures
      if(adr==9) {
    //  var temp = $('#pied').slider("getValue");
    var temp = $('#pied').val();
      pt.innerHTML = temp+"°C";
      var sendbuf = envoie_trame("09",temp*100,"00","01");
       }
       else if(adr==8) {
       // var temp = $('#buste').slider('getValue')*100;
       var temp  = $('#buste').val();
        bt.innerHTML = temp+"°C";
      var sendbuf = envoie_trame("08",temp*100,"00","01");
       }
         else if(adr==10) {
       // var temp = $('#matelas').slider('getValue')*100;
        var temp = $('#matelas').val();
        dt.innerHTML = temp+"°C";
      var sendbuf = envoie_trame("0A",temp*100,"00","01");
       }
       else if(adr==11)
       {
        // var temp = $('#temps').slider('getValue');
        var temp = $('#tete').val();
         tet.innerHTML = temp+"°C";
      var sendbuf = envoie_trame("07",temp*100,"00","01");
       }
       bluetoothSerial.write(String.fromCharCode.apply(String,sendbuf), 
                function() { 
                etat.innerHTML = "trame bien envoyée => "+String.fromCharCode.apply(String, sendbuf);
            }
                , function() { 
               etat.innerHTML = "write fail";
                 }
            );
       bluetoothSerial.subscribe('\n', function (data) {                     
            reception.innerHTML = "reponse du dome:"+data;            
          },
          function() { 
                reception.innerHTML = "Echec de la reception";
            }
         );
    },

    commande:function() {//trame de base une fois le sexe la couleur et le mode ont été defini
      $('#deviceready').css('display','none');
      $('#dome_perso').css('display','block');
      list_user();
    var temp = check();
    var time = recup_time();
    recup_temp(temp/100,temp/100,temp/100,temp/100,time);
     var sendbuf = envoie_trame("07",temp,time,"03");
       bluetoothSerial.write(String.fromCharCode.apply(String,sendbuf), 
                function() { 
                etat.innerHTML = "caracteristiques de base bien envoyée:"+String.fromCharCode.apply(String,sendbuf);
            }
                , function() { 
               etat.innerHTML = "echec de l'envoi";
                 }
            );
       bluetoothSerial.subscribe('\n', function (data) {                     
            reception.innerHTML = reception.innerHTML+" reponse du dome:"+data; 
                   app.lire_tout();           
          },
          function() { 
                alert("echec de la reception");
            }
         );
    },

    lire_tout:function() {
           var sendbuf = new Int8Array([58,48,52,48,51,48,48,48,48,70,70,48,48,54,48,57,65,13,10]);
           bluetoothSerial.write(String.fromCharCode.apply(String,sendbuf), 
                function() { 
                etat.innerHTML = "Rafraichissement...";//+String.fromCharCode.apply(String, sendbuf);
            }
                , function() { 
               etat.innerHTML = "echec de la lecture du dome";
                 }
            );
         bluetoothSerial.subscribe('\n', function (data) {                     
          try {
            var SL = new Array(100);
            SL = app.inser_SL(data);
           reception.innerHTML = "resultat de la reception:<br />";
         /*   for(var i=1;i<49;i++)
            {
             if(i%5==0)
              reception.innerHTML = reception.innerHTML+"<br />";
              reception.innerHTML = reception.innerHTML+" SLIN/SLOUT "+i+":"+parseInt(SL[i], 16)+" ||";
            }*/
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure de la tete theorique:"+parseInt(SL[8], 16)/100+"°C";
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure du buste theorique:"+parseInt(SL[9], 16)/100+"°C";
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure du pied theorique:"+parseInt(SL[10], 16)/100+"°C";
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure du dos theorique:"+parseInt(SL[11], 16)/100+"°C";
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure de la durée theorique:"+parseInt(SL[15], 16)+"mn";
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure du buste:"+parseInt(SL[25], 16)/100+"°C";
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure du pied:"+parseInt(SL[26], 16)/100+"°C";
            reception.innerHTML = reception.innerHTML+"<br />"+"temparateure du dos:"+parseInt(SL[27], 16)/100+"°C";

          }
          catch (err) { // non-standard
            reception.innerHTML = err.message;
            }              
        },
          function() { 
                reception.innerHTML = "Echec de la reception";
            }
         );
    },

    deconnection:function() {
      bluetoothSerial.disconnect(function() { 
                etat.innerHTML = "dome deconnectée";
                reception.innerHTML = "";
       $('#selection').css('display','block');
      $('#dome_perso').css('display','none');
      send_base.disabled = true;
      connect.disabled=false;
            }, function() { 
            });
    },
};

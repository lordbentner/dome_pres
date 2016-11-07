  function change_img(count,id) {
 /* var i = $('input[name=radio1]:checked').val();
  var j = $('input[name=radio2]:checked').val()+1;
  var k = $('input[name=radio3]:checked').val()+2;
  var l = $('input[name=radio1]:checked');
  var m = $('input[name=radio2]:checked');*/
  count = count + 1;
 // console.log(i);
 // console.log(j);
 // console.log(k);
  if(count%2 == 0)
  $('label[name='+id+']').css({'border-width' : '0px','border-style' : 'solid'});
  else
    $('label[name='+id+']').css({'border-width' : '5px','border-style' : 'solid'});
 }


function calculLRC(tab) {
    var res=0;
    var j=0;
    var original = String.fromCharCode.apply(String, tab);
    for(var i = 0; i<original.length;i++)
    {
      j = i*2+1;
      var val = parseInt(original.substr(j,2),16);
      res = res + val;
      if(j==original.length-2)
        break;
    }
    var bit = parseInt(res/256);
    return (255-(res-(256*bit))+1);
  } 

  function envoie_trame(adr,donnee,duree,octet)
  {
      var hexa = donnee.toString(16).toUpperCase();
      var hexa_du = (Math.round(duree/4)).toString(16).toUpperCase();
      var a=hexa.charCodeAt(0);
      var b=hexa.charCodeAt(1);
      var c=hexa.charCodeAt(2);
      var d=hexa.charCodeAt(3);
      var e = hexa_du.charCodeAt(0);
      var f = hexa_du.charCodeAt(1);
      if(Math.round(duree/4) < 16) {
        e = 48;
        f = hexa_du.charCodeAt(0);
      }
      if(donnee<100)
      {
         a=48;
        b=48;
      c=hexa.charCodeAt(0);
      d=hexa.charCodeAt(1);
      }
      else if(donnee<1000)
      {
        a=48;
        b=hexa.charCodeAt(0);
      c=hexa.charCodeAt(1);
      d=hexa.charCodeAt(2);
      }
      if(octet == "03")
      var sendbuf = new Int8Array([58,48,52,49,48,48,48,48,48,70,70,
      adr.charCodeAt(0),adr.charCodeAt(1),49,48,a,b,c,d,a,b,c,d,a,b,c,d,a,b,c,d,
      48,48,e,f,48,48,e,f,48,48,e,f,48,48,e,f]);
    else
       var sendbuf = new Int8Array([58,48,52,49,48,48,48,48,48,70,70,
      adr.charCodeAt(0),adr.charCodeAt(1),48,50,a,b,c,d]);

      var lrc  = calculLRC(sendbuf).toString(16).toUpperCase();
      if(parseInt(lrc, 16) > 16)
      var b = new Int8Array([lrc.charCodeAt(0),lrc.charCodeAt(1),13,10]); 
      else
       var b = new Int8Array([48,lrc.charCodeAt(0),13,10]);  
        var c = new Int8Array(sendbuf.length + b.length);
        c.set(sendbuf);
        c.set(b, sendbuf.length); 
    return c;
  } 

function recup_temp(te,b,p,m,t) {
 // document.getElementById('tet').innerHTML = te+"°C";
 $('#tet').innerHTML = te+"°C";
 document.getElementById('bt').innerHTML = b+"°C";
document.getElementById('dt').innerHTML = m+"°C";
document.getElementById('tt').innerHTML = t+"mn";
document.getElementById('pt').innerHTML = p+"°C";
$('#buste').val(b);
$('#pied').val(p);
$('#matelas').val(m);
$('#tete').val(te);
} 


function check() {

  var temp = 42;
  var sexe = $('input[name=radio1]:checked').val();
  var couleur = $('input[name=radio2]:checked').val();
  var type = $('input[name=radio3]:checked').val();
  var total = sexe + couleur + type;

  if(type == 4)
    temp = 42;
else if(sexe == 1)
    temp = 42+10+(type-1)*9+(couleur-1)*5;
else if(sexe == 2)
    temp = 42+4+(type-1)*10+(couleur-1)*5;
  else if(sexe == 3 && type == 1)
    temp = 44;
  else if(sexe == 3 && type == 2)
    temp = 46;
    else if(sexe == 3 && type == 3)
      temp = 47;
      return temp*100;
    }

    function recup_time() {
      var time = 45;
      var sexe = $('input[name=radio1]:checked').val();
  var couleur = $('input[name=radio2]:checked').val();
  var type = $('input[name=radio3]:checked').val();

      if(sexe == 3)
        time = 20;
      else
        time = 45;
      return time;
    }

/*$('#slider_rond').roundSlider({
        min: 0,
        max: 120,
        step: 1,
        value: 1,
        circleShape: "pie",
        sliderType : "min-range",
        tooltipFormat: "tooltipVal1"
    });
*/

function tooltipVal1(args) {
    return args.value+"mn";
}
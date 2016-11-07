<nav id="menu">
   <div class="element_menu">
<h3>Rubriques</h3>
<ul>
  <b>
  <a href="didacticiel.php"><h4><b><u>Didacticiel</u></b></h4></h4></a>
<li><a href="peau.php">Peau</a></li>
<li><a href="minceur.php">Minceur</a></li>
<!--<li><a href="anti-stress.php">Anti-stress</a></li>-->
<li><a href="douleur.php">Douleur</a></li>
<li><a href="stress.php">Stress</a></li>
<li><a href="digestion.php">Digestion</a></li>
<li><a href="anti-age.php">Anti-age</a></li>
<li><a href="sommeil.php">Meilleur sommeil</a></li>
<!--<li><a href="relaxation.php">Relaxation</a></li>-->
<li><a href="detox.php">Detox</a></li>
<li><a href="fatigue.php">Fatigue</a></li>
</b>
</ul>
	</div>
</nav>
<?php
	    try
    {
      $bdd = new PDO('mysql:host=localhost;dbname=grand_public;charset=utf8', 'root', '');
    }
    catch (Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }

    $id = $_SESSION['id'];
?>
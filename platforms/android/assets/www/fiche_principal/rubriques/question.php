<?php

  if(isset($_GET['q']))
    {
      $a = $_GET['q'];
      echo $a;
    }
   try
   {
     $bdd = new PDO('mysql:host=localhost;dbname=grand_public;charset=utf8', 'root', '');
   }
   catch (Exception $e)
   {
     die('Erreur : ' . $e->getMessage());
   }
   session_start();

  $req0 = $bdd->query("SELECT * FROM questions WHERE id_client=$id");
  while($question = $req0->fetch())
  {
    $q1 = $question['q31'];
    $q2 = $question['q32'];
    $q3 = $question['q33'];
    $q4 = $question['q34'];
    $q5 = $question['q35']; 
  }
   ?>
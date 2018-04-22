//DELANNAY Jordan 

/*
* Programme principal du serveur d'échecs en ligne
* @Author: Quentin Tonneau
* @Date: 2018-03-15 22:23:16 
* @Last Modified by: Quentin Tonneau
* @Last Modified time: 2018-03-19 11:45:29
*/

//Imports des modules serveur web
import express = require('express');
import bodyParser = require('body-parser');
declare var __dirname;
const _PORT_ = 8080; //port d'écoute du serveur
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/../client')); //distribution automatique des fichiers (ex : index.html)


/************** PARTIE ELEVE 1 ****************/

import { creerEchiquier, initialierEchiquier } from './echiquier';
import { jouerCoup, coupImpossible, coupEffectue } from './Coup';
import { Piece } from './Piece';
let couleur: number = 0; //couleur du joueur actuel ( 0:blanc 1:noir )
let joueur: string;
let echiquier: any[] = creerEchiquier(); //Création d'une variable globale de la partie en cours (echiquier vide)
initialierEchiquier(echiquier); //initialisation des pièces de l'echiquier à leur case de départ

/************* FIN PARTIE ELEVE 1 ************/

//Fonction de traitement d'un coup envoyé par le navigateur
app.post("/",function(req,res){
  let coup : string = req.body.coup; //récupération du coup
  
/************** PARTIE ELEVE 2 ****************/

   //un exemple de conditionnelle pour alterner les joueurs
  if (couleur == 0) {
    joueur = 'blanc';
    couleur = 1;
  }else{
    joueur = 'noir';
    couleur = 0;
  }
  
  echiquier = jouerCoup(coup,echiquier,joueur); //traitement du coup à jouer et mise à jour du nouvel echiquier
  
/************* FIN PARTIE ELEVE 2 ************/
  
  res.redirect("/"); //On redirige l'utilisateur vers l'affichage du nouvel echiquier
});



//Fonction retournant l'échiquier actuel
app.get("/status.js",function(req,res){
  res.end("var echiquier = "+JSON.stringify(echiquier));
});

//Lancement de l'application
app.listen(_PORT_, function () {
  console.log('Application lancée à l\'adresse http://localhost:'+_PORT_);
});
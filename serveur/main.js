"use strict";
exports.__esModule = true;
//Imports des modules serveur web
var express = require("express");
var bodyParser = require("body-parser");
var _PORT_ = 8080; //port d'écoute du serveur
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client')); //distribution automatique des fichiers (ex : index.html)
/************** PARTIE ELEVE 1 ****************/
var echiquier_1 = require("./echiquier");
var Coup_1 = require("./Coup");
var couleur = 0; //couleur du joueur actuel ( 0:blanc 1:noir )
var joueur;
var echiquier = echiquier_1.creerEchiquier(); //Création d'une variable globale de la partie en cours (echiquier vide)
echiquier_1.initialierEchiquier(echiquier); //initialisation des pièces de l'echiquier à leur case de départ
/************* FIN PARTIE ELEVE 1 ************/
//Fonction de traitement d'un coup envoyé par le navigateur
app.post("/", function (req, res) {
    var coup = req.body.coup; //récupération du coup
    /************** PARTIE ELEVE 2 ****************/
    //un exemple de conditionnelle pour alterner les joueurs
    if (couleur == 0) {
        joueur = 'blanc';
        couleur = 1;
    }
    else {
        joueur = 'noir';
        couleur = 0;
    }
    echiquier = Coup_1.jouerCoup(coup, echiquier, joueur); //traitement du coup à jouer et mise à jour du nouvel echiquier
    /************* FIN PARTIE ELEVE 2 ************/
    res.redirect("/"); //On redirige l'utilisateur vers l'affichage du nouvel echiquier
});
//Fonction retournant l'échiquier actuel
app.get("/status.js", function (req, res) {
    res.end("var echiquier = " + JSON.stringify(echiquier));
});
//Lancement de l'application
app.listen(_PORT_, function () {
    console.log('Application lancée à l\'adresse http://localhost:' + _PORT_);
});

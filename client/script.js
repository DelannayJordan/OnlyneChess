//DELANNAY Jordan

/*
 * Fonction principale executée après le chargement de la page
 * Initialise l'échiquier en fonction de la variable "echiquier"
 */

function init(){

    /************** PARTIE ELEVE 3 ****************/
    /******* A ADAPTER SELON VOS INTERFACES *******/

    /*  document.getElementById("player").innerHTML = "Tour du joueur "+joueur;
    *cette ligne est sensé affiché sur la page le joueur qui joue son tour
    *mais pour une raison que j'ignore le script n'a pas acces à la variable 'joueur'
    *déclaré dans le sript main.ts
    */

    for(var i=0;i<=7;i++){
        for(var j=0;j<=7;j++){
            var piece = echiquier[i][j];
            if(piece.nom==""){
                //Vidage de la case
                document.getElementsByTagName("tr")[i+1].getElementsByTagName("td")[j].innerHTML="";
            }else{
                //Affichage du symbole / image
                //document.getElementsByTagName("tr")[j+1].getElementsByTagName("td")[i].innerHTML=piece.symbole;  // version symbole
                document.getElementsByTagName("tr")[i+1].getElementsByTagName("td")[j].innerHTML="<img src=\""+piece.symbole+"\"/>"; //version image          
            }
        }
    }  
}

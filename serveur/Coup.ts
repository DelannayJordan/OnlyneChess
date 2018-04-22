export {jouerCoup};
export {coupImpossible};
export {coupEffectue};
import {Piece} from './Piece';
import { creerEchiquier, initialierEchiquier } from './echiquier';

function coupImpossible(coup:string, joueur:string) : void {
	console.log(coup)
	console.log(joueur)
	console.log("impossible de jouer ce coup");
}

function coupEffectue(coup:string, joueur:string) : void {
	console.log(coup)
	console.log(joueur)
	console.log("coup effectué")
}
  
function jouerCoup (coup: string, echiquier: Piece[],joueur: string) : Piece[] {
		
	let colonneCible: number;
	let ligneCible: number;
	let colonneDepart: number = -1;
	let ligneDepart: number = -1;
	let pion: string;
	let ligne: string[] = ['a','b','c','d','e','f','g','h'] // ce tableau sert à associer les numéros de colonne dans le tableau à leur lettre respective dans l'echiquier
	let table: Array<any> = coup.split('');
	
	/* le but de cette fonction est de recupérer le nom de la piece à déplacé et la case cible dans le "coup à jouer" dans 2 variables distinctes 
 	* le "coup à jouer" est d'abord split en un tableau de caractère, puis on sépare le nom de la piece et la case cible
 	*/	 
	if (table[0] == "R" || table[0] == "D") {	

		pion = table[0];
		
		for (let i: number = 0 ; i <= 7 ; i++) {
			
			if (table[1] == ligne[i]) {
				colonneCible = table[2]-1; //les lignes sur l'echiquier sont numerotées de 1 à 8 et de 0 à 7 dans notre programme. la ligne n sur l'echiquer correspond à la ligne n-1 dans notre programme. d'où le '-1' ici
				ligneCible = i; 
			}
		}

	}else{
		
		pion = table[0] + table[1];
	
		for (let i: number = 0 ; i <= 7 ; i++) {
			
			if (table[2] == ligne[i]) {
				colonneCible = table[3]-1;
				ligneCible = i;
			}
		}
	}

	/*la piece à déplacé et la case cible on été identifié et separé dans des variables differentes
	*apres avoire verifier que la case cible n'est pas déja occupée et que la case de départ contient bien la piece
	*on peut associer cette piece à la case cible et supprimer la piece de sa case d'origine 
 	*(toujours dans cette ordre)
	*/	
	 
	for (let i: number = 0 ; i<=7 ; i++) {
		for (let j: number = 0 ; j<=7 ; j++) {
			if (echiquier[i][j].nom == pion && echiquier[i][j].couleur == joueur){	
										
				colonneDepart = i;
				ligneDepart = j;
			}
		}
	}

	if (echiquier[colonneCible][ligneCible].couleur == joueur) {
	 
		coupImpossible(coup,joueur);
		
	}else if ( colonneDepart == -1 && ligneDepart == -1 ) {

		coupImpossible(coup,joueur);

	}else{
	 
		echiquier[colonneCible][ligneCible] = echiquier[colonneDepart][ligneDepart]
		echiquier[colonneDepart][ligneDepart] = {nom:'',couleur:'',symbole:''};
		coupEffectue(coup,joueur);

	}	
	
	return echiquier;
	
}

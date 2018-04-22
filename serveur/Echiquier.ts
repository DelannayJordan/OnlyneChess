// DELANNAY Jordan

/*module contenant les Fonctions qui creent et initialise un echiquier
*d'abord creer un tableau contenant 8 piece (1 ligne)
*ensuite creer un tableau contenant 8 lignes
*on peut alors initialisé le tableau crée
*/

export {creerEchiquier};
export {initialierEchiquier};
import {Piece} from './Piece';

function creerEchiquier() : Array<any> {
	
	let echiquier = Array<any>();
	
	for (let i: number=0 ; i<=7 ; i++) {
	
		echiquier[i] = Array<Piece>();
		
	}
	
	return echiquier;
}


function initialierEchiquier(echiquier: Array<any>) : void {
	
	//initialisation des piece a leur place de départ
	echiquier[0][0] = {nom:'Ta',couleur:'noir',symbole: 'tour_noir.png'};
	echiquier[0][1] = {nom:'Cb',couleur:'noir',symbole:'cavalier_noir.png'};
	echiquier[0][2] = {nom:'Fc',couleur:'noir',symbole:'fou_noir.png'};
	echiquier[0][3] = {nom:'D',couleur:'noir',symbole:'dame_noir.png'};
	echiquier[0][4] = {nom:'R',couleur:'noir',symbole:'roi_noir.png'};
	echiquier[0][5] = {nom:'Ff',couleur:'noir',symbole:'fou_noir.png'};
	echiquier[0][6] = {nom:'Cg',couleur:'noir',symbole:'cavalier_noir.png'};
	echiquier[0][7] = {nom:'Th',couleur:'noir',symbole:'tour_noir.png'};
    echiquier[1][0] = {nom:'Pa',couleur:'noir',symbole:'pion_noir.png'};
	echiquier[1][1] = {nom:'Pb',couleur:'noir',symbole:'pion_noir.png'};
	echiquier[1][2] = {nom:'Pc',couleur:'noir',symbole:'pion_noir.png'};
	echiquier[1][3] = {nom:'Pd',couleur:'noir',symbole:'pion_noir.png'};
	echiquier[1][4] = {nom:'Pe',couleur:'noir',symbole:'pion_noir.png'};
	echiquier[1][5] = {nom:'Pf',couleur:'noir',symbole:'pion_noir.png'};
	echiquier[1][6] = {nom:'Pg',couleur:'noir',symbole:'pion_noir.png'};
	echiquier[1][7] = {nom:'Ph',couleur:'noir',symbole:'pion_noir.png'};
	
	echiquier[6][0] = {nom:'Pa',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[6][1] = {nom:'Pb',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[6][2] = {nom:'Pc',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[6][3] = {nom:'Pd',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[6][4] = {nom:'Pe',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[6][5] = {nom:'Pf',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[6][6] = {nom:'Pg',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[6][7] = {nom:'Ph',couleur:'blanc',symbole:'pion_blanc.png'};
	echiquier[7][0] = {nom:'Ta',couleur:'blanc',symbole:'tour_blanc.png'};
	echiquier[7][1] = {nom:'Cb',couleur:'blanc',symbole:'cavalier_blanc.png'};
	echiquier[7][2] = {nom:'Fc',couleur:'blanc',symbole:'fou_blanc.png'};
	echiquier[7][3] = {nom:'D',couleur:'blanc',symbole:'dame_blanc.png'};
	echiquier[7][4] = {nom:'R',couleur:'blanc',symbole:'roi_blanc.png'};
	echiquier[7][5] = {nom:'Ff',couleur:'blanc',symbole:'fou_blanc.png'};
	echiquier[7][6] = {nom:'Cg',couleur:'blanc',symbole:'cavalier_blanc.png'};
	echiquier[7][7] = {nom:'Th',couleur:'blanc',symbole:'tour_blanc.png'};
	
	//initialisation des pieces vides
	for ( let i:number=2 ; i<=5 ; i++ ) {
		for ( let j:number=0 ; j<=7 ;j++ ) {
			
			echiquier[i][j] = {nom:'',couleur:'',symbole:''};

		}
	}
}
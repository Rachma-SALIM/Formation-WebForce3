
/*********** LES FONCTIONS***********/

//  Déclarer une fonction.
// NB: cette fonction ne retourne aucune valeur et ne prend pas de paramètres.

function Bonjour () {
    alert('Bonjour');
}
 
//  Je vais executer ma fonction 'Bonjour' et déclencher ses instructions en l'appelant.

Bonjour (); 

// Déclarer une fonction qui prend des variables en paramètre
/** 
 @param {string} Prenom
 @param {string} Prenom   
 */
  
function DitBonjour (Prenom, Nom){
    document.write ( "<p> Bonjour <strong>"+ Prenom+ " " + Nom+ "</strong> ! </p>");
}

// Appeler/Executer une fonction avec des paramètres en dehors de la fonction
DitBonjour( "Hugo", "LIEGEARD");
//  Je lui passe les valeurs au moment où je l'appelle , toujours dans le même ordre;

/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */

function Addition(nb1, nb2){
    var resultat = nb1 + nb2;
    document.write ( "L'addition de " + nb1 +" " + "et " + nb2+" " + "est égale à " + resultat +"<br>");
}
Addition (2, 3);
Addition (10, 5);
Addition (20, 30);
Addition (40, 5);

//  or

function Addition(nb1, nb2){
   return nb1 + nb2;

}

document.write ( Addition (10,5));


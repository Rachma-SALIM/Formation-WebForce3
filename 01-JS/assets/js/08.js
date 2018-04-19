/****** LES CONDITIONS *********/

//  else is not compulsory

/* var MajoriteLegaleFr= 18
if ( 14>=MajoriteLegaleFr){
    alert( "Bienvenue!"); 
} else {
    alert("Google...");
} */

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

//  1.Initialization variables

//  2.function
/* 
var MajoriteLegaleFr= 18;

    function User() {
        let age= parseInt(prompt("How old are you!"));
        console.log(age);
        console.log(typeof age);

        if (age >=MajoriteLegaleFr){
            alert ( "Bienvenue!");
        } else {
        alert ( "Vous n'êtes pas majeur!") 
        document.location.href = "https://www.google.fr/search?q=majorite+en+France&rlz=1C1GCEA_enFR790FR790&oq=majorite+en+France&aqs=chrome..69i57j0l5.5895j0j8&sourceid=chrome&ie=UTF-8";
        }
    } */
    
// User();

// CORRECTION


// -- 1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// -- 2. Créer une fonction pour vérifier son age.

/**
 * Retourne VRAI si majeur.
 * FAUX sinon.
 * @param {Number} age 
 */
function estMajeur(age) {
    if(age >= MajoriteLegaleFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var ageSaisieParMonUtilisateur = parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));

// -- 4. Vérification de l'age du visiteur....
if( estMajeur(ageSaisieParMonUtilisateur) ) {

    // -- 4a. J'affiche un message de bienvenue
    alert('Bienvenue sur mon site internet réservé aux majeurs...');
    document.write("0_0 !!!");

} else {
    
    // -- 4b. J'effectue une redirection
     document.location.href = "https://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";  */

   /*  LES OPERATEURS DE COMPARAISON */

   /* L'opérateur de comparaison "==" signifie:
   Egal à et permet de vérifier que 2 variables sont identiques.
   "===", c'est strictement égal à. Il va comparer la valeur, mais aussi le type. 
   "!=", signifie différent de.
    "!==", signifie strictement différent de.

    ATTENTION! PAS DE SIMPLE EGAL DANS LES CONDITIONS. SMPLE EGALE EST UNE AFFECTATION DE VALEURS
   */

}
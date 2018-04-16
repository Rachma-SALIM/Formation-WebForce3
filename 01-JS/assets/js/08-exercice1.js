 /* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.
Je doiS saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;
email = "wf3@hl-media.fr";
mdp = "wf3";

// 1. saisir email et mdp
let emailUser   = prompt( "Entrez votre adresse email svp" , "<adresse email>");
let mdpUser     = prompt( "Entrez votre adresse mdp svp" , "<mot de passe ici>");

function login(emailUser,mdpUser) {
    if (email === emailuser && mdp === mdpuser) {
        return true;
    } else {
        return false;
    }
}

// 2.if wrong, alert

if login(emailUser, mdpUser){ 
   
    document.write( "Bienvenue sur l'espace sécurisé");
    else { 
        alert ('Votre email et/ou mot de passe est incorrect! Veuillez réessayer!');
} 
}

// 3. if not, welcome message

// ***************** CORRECTION BELOW**************

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.
Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

/**
 * Vérifie l'identification d'un utilisateur
 * @param {string} emailPasseEnParam 
 * @param {string} mdpPasseEnParam 
 * @return {boolean}
 */
function monUtilisateurEstCorrect(emailPasseEnParam, mdpPasseEnParam) {

    if(emailPasseEnParam === email && mdpPasseEnParam === mdp) {
        return true;
    } else {
        return false;
    }

}

// -- 1. Demander à l'utilisateur son email
var emailUser = prompt("Bonjour, Quel est votre email ?", "<Saisissez votre Email>");

// -- 2. Demander son mot de passe
var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre mot de passe>");

// -- 3. Vérifier si l'email et le mot de passe saisie par l'utilisateur correspond avec la BDD.
if(monUtilisateurEstCorrect(emailUser, mdpUser)) {
    // -- 3a. Si tout est ok, alors, BIENVENUE
    alert('Bienvenue ' + emailUser + ' !');
} else {
    alert('ATTENTION, email/mot de passe incorrect.');
    // -- 3b. Sinon, on affiche un message d'erreur.
}

// -- EXEMPLE SANS LES FONCTIONS

// // -- 1. Demander à l'utilisateur son adresse email
// var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");

// // -- 2. Je vérifie si l'email saisie (emailUser) correspond avec la BDD (email)
// if(emailUser === email) {
//     // -- 2a. Tous est ok, je continue la vérification avec le mot de passe...

//     // -- 2a1. On demande a l'utilisateur son mot de passe
//     var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

//     // -- 2a2. Vérification du mot de passe
//     if(mdpUser === mdp) {
//         alert('Bienvenue !');
//     } else {
//         alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
//     }

// } else {
//     // -- 2b. Les emails ne correspondent pas...
//     alert("ATTENTION, nous n'avons pas reconnu votre adresse email.");
// }

    /* -------------------------------------------------------- *\
   /                 ~ LES OPERATEURS LOGIQUES ~                  \
  /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \
    |                                                           |
    |           ##### L'opérateur ET : && ou AND #####          |
    |                                                           |
    |   Si la combinaison email user et email correspond, ET    |
    |   la combinaise mdpuser et mdp correspond.                |
    |                                                           |
    |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT |
    |   correspondre pour être validée.                        |
    |   Ex. if(emailUser == email && mdpUser == mdp) {...}      |
    |                                                           |
    |           ##### L'opérateur OU : || ou OR #####           |
    |                                                           |
    |   Si la combinaison emailUser et email correspond ET/OU   |
    |   la combinaison mdpUser et mdp correspond.
    |                                                           |
    |   --> Dans cette condition, au moins l'une des deux       |
    |   doit correspondre pour être validée.                    |
    |   Ex. if(emailUser == email || mdpUser == mdp) {...}      |
    |                                                           |
    |        ##### L'opérateur " ! " ou encore NOT #####        |
    |                                                           |
    |   L'Opérateur "!" signifique le CONTRAIRE DE... ou NOT    |
    |                                                           |
    |   var monUtilisateurEstApprouve = true;                   |
    |   if(!monUtilisateurEstAppprouve) {...}                   |
    |   Mon Utilisateur n'est pas approuvé.                     |
    |                                                           |
    |   Reviens à écrire :                                      |
    |   if(monUtilisateurEstApprouve == false) {...}            |
    |                                                           |
    \*---------------------------------------------------------*/

/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];
        
// -- LesFlemmards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

// 0. initialisation variables

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];
    
var BddLength = BaseDeDonnees.length;


// 1. système d' authentification
    //  Verifier également si le mot de passe est correct, revérifier les adresses encore une fois!


// 2.demander user email/mdp
let userEmail= prompt( " enter your email", "<email here>");
let userMdp = prompt ("enter mdp", "<mdp here>");

function myUserIsCorrect (userEmail,userMdp){
    
    for ( i=0; i < BddLength ; i++){
        if(userEmail===BaseDeDonnees[i].email && userMdp === BaseDeDonnees[i].mdp){
            return true;
        } else if(userMdp === BaseDeDonnees[i].mdp) {
            if (userEmail===BaseDeDonnees[i].email){
                return true;
            } 
        } else
        {
            return false;
        } 
    }  
}
//   NO NEED OF ELSE IF HERE!
// 3. verifier que c'est correct
        // 3a. Congrats if correct
        // 3b: Error if  incorrect

 
if (myUserIsCorrect(userEmail,userMdp)) {
    w( 'welcome ' + BaseDeDonnees [i].prenom + '  ' + BaseDeDonnees[i].nom + '!');
} else { alert( " Try again! Either one is incorrect!");

}

myUserIsCorrect();

// https://www.grafikart.fr/formations/debuter-javascript/boucles

//  CORRECTION

/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];
        
// -- LesFlemards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}

// -- Déclaration des Variables
// EstCeQueLeMailEstDansLeTableau = faux;
var isEmailInArray = false;

// -- 1. Demander à l'utilisateur son email/mot de passe
var email   = prompt('Bonjour, Quel est votre email ?','<Saisissez votre email>');
var mdp     = prompt('votre mot de passe ?','<Saisissez votre mot de passe>');

// -- 2. Parcourir l'ensemble des données de mon tableau
// for(let user of BaseDeDonnees) {...}
for(let i = 0 ; i < BaseDeDonnees.length ; i++) {

    // -- 2a. Vérifier l'identification de l'utilisateur
    if(email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp) {
        
        // -- J'ai trouvé une correspondance
        isEmailInArray = true;
        w('Bonjour ' + BaseDeDonnees[i].prenom + ' !');

        // -- Je stop la boucle for, j'ai trouvé ce que je cherche.
        break;
    }

}

if(!isEmailInArray) {
    // -- Aucune correspondance
    alert('ATTENTION, Email / Mot de Passe incorrect !');
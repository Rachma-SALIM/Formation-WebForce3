/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */ 
/*  1.fonction
        a. age prompt   
        b; si majeur --> bienvenue
        c.redirection google*/

       /* ageLegale = 18;
        console.log (typeof ageLegale);
        var age = prompt ( " please enter your age");
        function visitor (){
            if (age >= ageLegale){
                alert ("Bienvenue");
            } else { alert ( "vous n 'êtes pas majeur!");
                 document.location.href = "https://www.google.fr";
        }

        }
        visitor();

 /* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.
Je doiS saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */


/*1; enter email /mdp
2; check if both correct
        a; if correct, welcome
        b: if not, try again*/

        
// -- BASE DE DONNEES
/*var email, mdp;
email = "wf3@hl-media.fr";
mdp = "wf3";

function myUserIsCorrect (myemail,mymdp){
    if(myemail===email && mymdp === mdp){
        return true;
    } else {
        return false;
    }
}
 
let userEmail= prompt( " enter your email", "<email here>");
let userMdp = prompt ("enter mdp", "<mdp here>");

if (myUserIsCorrect(userEmail,userMdp)) {
    alert( " welcome");
} else { alert( " either one is incorrect!");

}

myUserIsCorrect();



/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */
/*0. variables
1.fonction
    a. enter firstname; prompt  
    b.display hello + firstname, how old are you?
    c. enter age prompt
    d. you were born in ...prompt
    e. recap*/

        let date = new Date();
        let AnneeActuelle = date.getFullYear;

    function hello(){
        let firstname= prompt(" enter firstname");
        alert ( "hello " + firstname + "! How old are you?");
        let age= prompt ( " enter age");
        alert ( "you were born in " + date.getfullyear - age );
    }

    document.write ("hello " + firstname + ". " + " you're "+ age + " years old.");

    hello ();
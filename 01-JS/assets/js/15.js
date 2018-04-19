/* -----------------------------------------------------------------------------------
        **************************LES EVENEMENTS***********************************


        Les événements vont me permettre de déclencher une fonction, c'est à dire une série d'instructions; suite à une action de mon utilisateur.

        OBJECTIF: Etre en mesure de capturer ces évènements afin d'executer une fonction.

        Les événements: MOUSE (Souris)

            Click      :     au clic sur un élément
            mouseenter : La souris passe au dessus de la wone d'un élément
            mouseleave : la souris sort de cette zone.

         Les événements: KEYBOARD 

            Keydown    : une touche du clavier est enfoncée;
            Keyup       : une touche du clavier est relâchée;

         Les événements: WINDOW
            scroll  :détecter le défilement de la fenêtre
            resize  : redimensionement de la fenêtre

        Les événements   FORM

            change : pour les éléments <input>, <select> et <textarea>;
            submit  : àà l'envoi (soumission) du formulaire;
            input   : pour capter la saisie d'un utilisateur sur un champ <input>.



   **************************LES  ECOUTEURS D'EVENEMENTS*****************************

   Pour attacher un événement à un élément, ou autrement dit, pour déclarer un écouteur d'événement qui se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante:
--------------------------------------------------------------------------------------*/

var p = document.getElementById('MonParagraphe');
//  Je souhaite que mon paragraphe soit rouge au click de la souris.

function changerLaCouleurEnRouge (){
    p.style.color="red";
}

p.addEventListener ('click', changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// creation du champ input
var input  = document.createElement ('input');
//   Attribut d'un attribut
input.setAttribute ('type', 'text');
input.setAttribute('placeholder', 'saisissez du contenu...');

//  Attribution d'un ID
input.id = "MonID";

// Ajout dans la page
document.body.appendChild (input);


function voirLaSaisieDeMonInput (){

      console.log (input.value);
      alert (input.value);
}
input.addEventListener('change', voirLaSaisieDeMonInput );





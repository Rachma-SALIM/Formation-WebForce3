/* 
 LA MANIPULATION DES CONTENUS
  
 
 
 */


// function l(e) {
//     console.log(e)
// }
// Nouvelle Syntaxe ECMA 6 avec les fonctions fléchées
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

l = e => console.log(e);

// Je souhaite récupérer le lien google

var google = document.getElementById ('google');
l(google);

// Now, I wish to have access aux informations de ce lien...
    // A. Le lien vers lequel pointe la balise
    l(google.href);
     // B. l' ID de la Balise
     l(google.id);
      // c. La Classe de la Balise
    l(google.className);
     // A. Le texte de la balise
     l(google.textContent);

     /*  Now, je souhaite modifier le contenu de mon lien!
     Comme une variable classique, je vais simplement venir affecter une nouvelle valeur à mon "textContent"
     */

     google.textContent = " Mon lien vers GoOOOooogle!";

    //   Ditto to modify the link (google.href = "dsfqkjg";) or anything else!

    /* -------------------------------------------------------
    
                AJOUTER UN ELEMENT DANS MA PAGE
    ----------------------------------------------------------*/

    /* Nous allons utiliser 2 étapes:
    
    1; La fonction document.createElement () va permetter de générer un nouvel élément dans le DOM; que je pourrais modifier par la suite avec les méthodes que nous vneons de voir
    

    NB: Ce nouvel élément est placé en mémoire... 
    
    */

    //  definiton de l'élément
    var span = document.createElement('span');

    // Si je souhaite lui donner un ID
    span.id="MonSpan";

    // Lui attribuer du contenu

    span.textContent = "Mon Beau texte en JS!";

    //  Comment ajouter l'élément dans la page?

    google.appendChild (span);

    /* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
<h1><a>TITRE</a></h1>
-------------------------------- */


// CORRECTION

// voir sur github
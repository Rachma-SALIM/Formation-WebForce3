/****LES BOUCLES*****
la boucle FOR

Pour i égal 0; TANT QUE i est strictement inférieur ou égal à 10; ALORS j'incrémente i par pas de 1.
*/
        for (let i = 0; i<=10; i++){
        document.write ('<p> Instruction executée: <strong>' + i + '</strong> </p>');
        }

        document.write('<hr>');

// LA BOUCLE WHILE

        var j=0
//  Tant que j est inférieur ou égal à 10; alors j'execute mes instructions puis j'incrémente j par pas de 1.

        while (j<=10){
            document.write ('<p> Instruction executée: <strong>' + j + '</strong> </p>');
            j++;
            }
// ATTENTION A NE PAS OUBLIER L'INCREMENTATION!

/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

/*var Prenoms = ["Jean", "Marc", "Matthieu", "Luc", "Pierre", "Paul", "Jacques", "Hugo"];
Prenoms[0] = "Jean";
Prenoms[1] = "Marc";
Prenoms[2] = "Matthieu";
Prenoms[3] = "Luc";
Prenoms[4] = "Pierre";
Prenoms[5] = "Paul";
Prenoms[6] = "Jacques";
Prenoms[7] = "Hugo";


 for (let Prenoms= 0; Prenoms<=7; Prenoms++){
     document.write ( "La liste des prénoms est " + Prenoms + "<br>");
 }*/

 document.write('<hr>');

//  CORRECTION

var Prenoms = ["Jean", "Marc", "Matthieu", "Luc", "Pierre", "Paul", "Jacques", "Hugo"];
console.log(Prenoms);
for (let i= 0 ; i<Prenoms.length; i++){
    document.write(Prenoms[i]+ '<br>');
}

document.write('<hr>');

var Prenoms = ["Jean", "Marc", "Matthieu", "Luc", "Pierre", "Paul", "Jacques", "Hugo"];
var j = 0;
while (j<Prenoms.length){
    document.write(Prenoms[j]+ '<br>');
    j++;
}

// BOUCLE FOR EACH
Prenoms.forEach ( affichePrenom); 
//  on lui attribue une fonction au dessus entre ()

function affichePrenom(valeur, i) {
    document.write (i + ' '+ valeur +' <hr> <br>');
}

//  BOUCLE For Of

document.write ("BOUCLE For Of <br>");

for ( prenom of Prenoms){
    document.write ( prenom + '<br>');
;}

document.write('<hr>');

  /**
  * Pour découvrir toutes les autres possibilités
  * de boucle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
  */

//   Boucle INVERSE - reverse loop


for ( let i = Prenoms.length ; i--;){
    document.write ( Prenoms  [i]+ '<br>');
}

/*https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/ */

// Most of the time, for loop is better, especially the reverse one in terms of
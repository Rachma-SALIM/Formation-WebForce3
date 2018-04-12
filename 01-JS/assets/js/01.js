// alert('Wow! Tu es tjs ac moi...!')

// 2 slashes for an inline comment.
/* more than one line
shortcuts; CTR + : or ALT + SHIFT + A
 */

//  declare a variable
var Prenom;

// 2. Give it a value
Prenom ="Hugo"; 


// 3. Display the value of the var in the console
console.log(Prenom);


/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
---------------------------------------------------*/
 console.log(typeof Prenom); 
//  give me the type of my var

// declaration of a number
var Age =40;

// display it in the console
console.log(typeof Age);

// get to know the type of a var
console.log(typeof Age);

 /*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LA PORTEE DES VARIABLES  ~ ~ ~ ~ ~ ~ |
---------------------------------------------------*/
/*
Les variables déclarées directement à la racine du fichier JS sont appelées variables GLOBALES.
Elles sont disponibles dans l'ensemble de votre document (doc.js), y compris dans les fonctions.


Les variables déclarées inside the function are called LOCAL variables. ONLY ACCESSIBLE/AVAILABLE INSIDE A FUNCTION or inside the BLOC that holds them.

Since ECMA 6, we may declare a variable with the keyword "let".
The variable will thus be available only in the BLOCK that holds it.

   for instance,  if it's declared in a condition; it will be available only in the condition block.

*/

// FLOAT Variables
var uneDecimale= -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// BOOLEAN Variables (true or False)
var unBooleen= false;
console.log(unBooleen);
console.log(typeof unBooleen);

// les constantes
/* La declaration CONST permet de créer une constante accessible uniquement en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas étre déclarée à nouveau. 

Généralement, par convention, les constantes sont en majuscule.
Depuis ECMA 6, on recommende l'utilisation des constantes plutôt que var ou let s'il n' y aura pas de modification de valeur à votre variable.*/

/*const HOST= "localhost";
const USER= "roo";
const PASSWORD= "mysql";
 I can't do the following...
 USER="Hugo";*/
// uncaught typeError:Assignment to constant variable.

 /*-----------------------------------------------------------------------------------------------------------------------------------
| ~ ~ ~ ~ ~   ~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ ~LA MINUTE INFO ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ |

Au fur et à mesure que l'on affecte ou ré-affecte des valeurs à une variable, celle-ci prend la nouvelle valeur et le nouveau type.
En JS, les variables sont auto-typées.

Pour convertir une variable de type number en string et vice-versa, on peut utiliser les fonctions natives de JS.

---------------------------------------------------------------------------------------------------------------------------------------*/


var unNombre="24";
console.log(unNombre);
console.log(typeof unNombre);

/*  La fonction parseInt() pour retourner un Entier à partir de mon string. */
unNombre = parseInt (unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Je ré-affecte une valeur à ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// La conversion d'un nombre en string avec toString()

unNombre = 10;
var monNombreEnString = unNombre.toString();
console.log(unNombre);
console.log(typeof monNombreEnString);


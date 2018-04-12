// déclarer un tableau indexé.
var monTableau = [];
// or
var myArray = new Array;

monTableau[0] = "Rahma";
monTableau[1] = "Freddy";
monTableau[2] = "Ousmane";

// Affiche toutes les données

console.log(monTableau);

// Affiche Freddy
console.log(monTableau[1]);

var NosPrenoms = ["Salim", "Greg", "Cheffia"];
console.log(NosPrenoms);

//  Déclarer et Affecter des Valeurs à un OBJET.
// ATTENTION PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT

var Coordonnee = {
    prenom : "hugo", 
    Nom    :"Liegeard",
    age    : 82
};

console.clear();
console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.prenom);
console.log(Coordonnee.nom);

// créér 2 tableaux indexés

/*var ListeDesPrenoms = ["Ousmane", "Cheffia", "Hugo"];
var ListeDesNoms = ["MAMA", "BENALLAL", "LIEGERAD"];
var Annuaire = [ ListeDesPrenoms, ListeDesNoms];

console.log(Annuaire);
document.write (Annuaire [0][1]);
document.write (' ');
document.write (Annuaire [1][1]);*/

    /* -------------------------------------------------\
    |                    EXERCICE :-)                   |   
    |   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
    |   Créez un Tableau à 2 dimensions appelé          |
    |   "AnnuaireDesStagiaires" qui contiendra          |
    |   toutes les coordoonnées pour chaque stagiaire.  |
    |                                                   |
    |   Ex. Nom, Prénom, Tel                            |
    \------------------------------------------------- */


var ListeDesPrenoms = ["Ousmane", "Cheffia", "Hugo", "Maxime"];
var ListeDesNoms = ["MAMA", "BENALLAL", "LIEGERAD", "EVENNOU"];
var NumTel = ["06 52 45 61 53 24 ", "06 45 84 54 85", "06 24 54 78 81", "06 65 48 54 80"]
var Annuaire = [ ListeDesPrenoms, ListeDesNoms,NumTel ];

console.log(Annuaire);
document.write (Annuaire [0][0]);
document.write (' ');
document.write (Annuaire [1][0]);
document.write (' ');
document.write (Annuaire [2][0]);

document.write ('<br>');
document.write ('<br>');

console.log(Annuaire);
document.write (Annuaire [0][1]);
document.write (' ');
document.write (Annuaire [1][1]);
document.write (' ');
document.write (Annuaire [2][1]);

document.write ('<br>');
document.write ('<br>');

console.log(Annuaire);
document.write (Annuaire [0][2]);
document.write (' ');
document.write (Annuaire [1][2]);
document.write (' ');
document.write (Annuaire [2][2]);

document.write ('<br>');
document.write ('<br>');

console.log(Annuaire);
document.write (Annuaire [0][3]);
document.write (' ');         
document.write (Annuaire [1][3]);
document.write (' ');
document.write (Annuaire [2][3]);

document.write ('<br>');
document.write ('<br>');


var AnnuaireDesStagiaires = [
    { prenom : "Hugo", nom : "LIEGEARD", tel : "0783 97 15 15" },    
    { prenom : "Salim", nom : "SOUMARE", tel : "XXXX XX XX XX" },
    { prenom : "Pransun", nom : "BALASUBRAMANIAM", tel : "XXXX XX XX XX" },
];

console.log(AnnuaireDesStagiaires);

// document.write (AnnuaireDesStagiaires[0,1,2]); --> On ne peut pas afficher un tableau en l'écrivant 


// Autre methode plus facile d'afficher le tableau, stocker des objets, tableaux à plusieurs dimensions

// -- Exemple 5D

var Contacts = [

    {
        prenom      :   "Hugo",
        nom         :   "LIEGEARD",
        coordonnees :   {
            email   :   "wf3@hl-media.fr",
            tel     :   {
                fixe    :   "0596 108 328",
                fax     :   "0596 108 632",
                port    :   {
                    prive   :   "07 83 97 10 15",
                    pro     :   "07 83 97 15 15"
                }
            },
            adresse :  {
                ville   :   "Ducos",
                cp      :   "97224",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Rodrigue",
        nom         :   "NOUEL",
        coordonnees :   {
            email   :   "rodrigue.nouel@hl-media.fr",
            tel     :   {
                fixe    :   "0596 56 78 89",
                fax     :   "0596 32 15 22",
                port    :   {
                    prive   :   "0696 78 89 56",
                    pro     :   "0696 89 23 45"
                }
            },
            adresse :  {
                ville   :   "Fort-de-France",
                cp      :   "97200",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Gregory",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "greg.dhaem@hl-media.fr",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "les Mesnuls",
                cp      :   "78490",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);

document.write ('<br>');
document.write ('<br>');

document.write(Contacts[2].coordonnees.adresse.ville);

// console.log(Contacts[0].coordonnees.adresse.pays.nom);

   /* -------------------------------------------------\
    |                                    
    |   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
    |                        AJOUTER UN ELEMENT
    \------------------------------------------------- */

    /* sI JE SOUHAITE AJOUTER UN ou plusieurs éléMENT DANS MON TABLEAU, je fais appel à la fonction push() qui me renvoie le nombre d'éléments */

    var Couleurs = ['Rouge', 'Jaune', 'Vert'];
    console.log();
    console.log(Couleurs);
    var nbElementsDeMonTableau = Couleurs.push('Orange');
    console.log(Couleurs);
    console.log(nbElementsDeMonTableau);

    /* NB:La fonction unshift() permet d'ajouter 1 ou plusieurs éléments au DEBUT de mon tableau et d'en récupérer la valeur.
    Je peux accessoirement récupérer cette valeur dans une variable.
    
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift */

 /* -------------------------------------------------\
    |                                    
    |   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
    |   RECUPERER ET SORTIR LE DERNIER ELEMENT
    \------------------------------------------------- */

    /* La fonction pop() me permet de supprimer un ou plusieurs éléments de mon tableau et d'en récupérer la valeur. Je peux accessoirement récupérer cette valeur dans une variable */

    var monDernierElement = Couleurs.pop();
    console.log (Couleurs);
    console.log (monDernierElement);
    // recuperer le dernier élément ci-dessus

    /* La même chose est possible avec le premier élément en utilisant la fonction shift.
    NB: La fonction splice() vous permet de sortir un ou plusieurs éléments de votre tableau. */
 
/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous aurons donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique: 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****


II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

//  1.Tableau 3D
// on ne peut pas afficher les objets sur la page html mais seulement sur la console


/*var PremierTrimestre = [
    { prenom : "Hugo", nom : "LIEGEARD", matieres : {
        francais:12, maths: 19, physique: 4
    } },    
    { prenom : "Salim", nom : "SOUMARE", matieres : {
        francais:4, maths: 11, physique: 10, svt: 5
    } },
    { prenom : "Pransun", nom : "BALASUBRAMANIAM", matieres : {
        francais:10, maths: 18, physique: 15, espagnol:17
    }  },
    { prenom : "Maxime", nom : "EVENNOU", matieres : {
        francais:10, maths: 16, physique: 7, anglais:17
    } },
    { prenom : "Rahma", nom : "SALIM", matieres : {
        francais:15, maths: 10, physique: 13, eps: 16
    }  }
];

//  des objets dans le tableau avec les accolades
// Les indices ici les matieres; nom etc... no Capital letters !

console.log(PremierTrimestre);

for ( let i=0; i < PremierTrimestre.length; i++){
   console.log ( PremierTrimestre[i]);
   document.write ( PremierTrimestre[i]);
}*/

// CORRECTION

var PremierTrimestre = [
    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais    : 4,
            math        : 7,
            physique    : 4,
            gestinfq    : 18,
            musique     : 19
        }
    },
    {
        prenom  : "Salim",
        nom     : "SOUMARE",
        moyenne : {
            francais    : 4,
            math        : 12,
            physique    : 10,
            anglais     : 15
        }
    },
    {
        prenom  : "Rachma",
        nom     : "SALIM",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 16,
            espagnol    : 16,
            philo       : 14,
        }
    },
    {
        prenom  : "Ousmane",
        nom     : "MAMA",
        moyenne : {
            francais    : 8,
            math        : 13,
            anglais     : 16,
            espagnol    : 16,
            philo       : 6,
        }
    },
    {
        prenom  : "Cheffia",
        nom     : "BENALLAL",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 13,
            allemand    : 12,
            latin       : 10
        }
    },
];

console.log(PremierTrimestre);



//  Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale.
    
 
// CORRECTION

/**https://www.codingame.com

// -- Les Flemards.js

function l(e) {
    console.log(e);
}

function w(e) {
    document.write(e);
} */

console.log(PremierTrimestre);

// -- Les Flemards.js

function l(e) {
    console.log(e);
}

function w(e) {
    document.write(e);
}

// -- Je souhaite afficher la liste de mes étudiants
w('<ol>');
// var NombreDeMatiere, SommeDesNotes;
for(let i = 0 ; i < PremierTrimestre.length ; i++) {
    
    let Etudiant = PremierTrimestre[i];
    l(Etudiant);

    var SommeDesNotes = 0, NombreDeMatiere = 0;

    w('<li>');
    
        w(Etudiant.prenom + ' ' + Etudiant.nom);
        w('<ul>');

            // -- Afficher les matières d'un Etudiant
            for(let matiere in Etudiant.moyenne) {

                l(matiere);
                w('<li>');

                    w(matiere + ' : ' + Etudiant.moyenne[matiere]);

                w('</li>');

                SommeDesNotes += Etudiant.moyenne[matiere];
                NombreDeMatiere++;

            } // -- Fin de la boucle matiere

            l('NombreDeMatiere : ' + NombreDeMatiere);
            l('SommeDesNotes : ' + (SommeDesNotes));

            w('<li>');
                w('<strong>Moyenne Générale : </strong>' + ( SommeDesNotes / NombreDeMatiere).toFixed(2) );
            w('</li>');

        w('</ul>');

    w('</li><br>');

}
w('</ol>');



 /* 
   
        CONSIGNE : 
Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
Considérons un Tableau JS contenant une liste de membre.
---------
ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.
Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.
A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.
---------
ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.
Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.
Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.
---------
ETAPE 3 : 
   
Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.
  
---------
  
  ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.
  
  En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :
  
      A. L'ajout de l'utilisateur dans le tableau.
      B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.
      
      Ex. Merci Hugo ! Tu es maintenant inscrit.
      Voici la liste de nos Membres :
      
          Hugo : 26ans
          Rodrigue : 56ans
          ...
          
      NB : Devra bien entendu s'afficher le membre qui vient de s'inscrire.
     */

var membres = [
    {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
    {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
     {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
    {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
];  


/* ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.
Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.
A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus. */

// Variables



//  saisie Pseudo, temps réel, événement

var pseudo = document.getElementById('pseudo');
var ageError= document.getElementsByClassName ('ageError');
var submit = document.getElementById ('submit');
var utilisateurAChangePseudo = document.getElementById ('Pseudo');


function verifierLaSaisieDeMonPseudo (){
    for ( i=0; i < membres.length; i++){
        if (pseudo === membres[i].pseudo){
             alert (pseudoError.value);
            document.getElementById("submit").disabled = true; 
        } else 
       {
             pseudo.addEventListener ('change', utilisateurAChangePseudo);
             document.getElementById("submit").disabled = false;
             }
    }   
}
verifierLaSaisieDeMonPseudo();
pseudo.addEventListener('input', verifierLaSaisieDeMonPseudo  );
pseudo.addEventListener ('change', utilisateurAChangePseudo);

//  vérifier qu'il n'est pas dans le tableau

//Condition: 
    // a. s'il existe dans le tableau--> pseudo Error + bouton submit desactivé, sinon bouton submit 
    // b. bouton actif + no pseudoError!

    // END ETAPE 1 🤷🤔🤷

   /*  ---------
    ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
    Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.
    Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.
    Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.
    --------- */



    //  Déclarer les variables
    var age = document.getElementById('age');
    var ageError=document.getElementsByClassName ('ageError');
    var submit = document.getElementById ('submit');

    //  Verifier si l'utilisateur est majeur

        function verifAge(age){
                //  convertir l' age en nombre
           var age = parseInt(age);
                //  l'age doit un nombre et supérieur à 18
           if(isNaN(age) || age < 18 )
           {
            alert (ageError.value);
            document.getElementById("submit").disabled = true; 
           }
           else
           {
            document.getElementById("submit").disabled = false;
           }
        }

        verifAge();

    //    Comment revérifier quand il corrigera son âge??? Avec change événement mais comment??

   /* ---------
ETAPE 3 : 
   
Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.
  
---------*/

//  Prendre l 'élément dont on a besoin

var Bienvenue = document.getElementById('Bienvenue');

// Attribuer un contenu à Bienvenue

Bienvenue.textContent = "Bienvenue";

//  Je souhaite que mon message récupère le nom saisi en temps réel et l'affiche à côté de 'Bienvenue'.

function AfficherUnMessageDeBienvenueAvecLeNom (){
    Bienvenue.textContent = "Bienvenue " + Bienvenue.value + "!" ;
}

Bienvenue.addEventListener ('input', AfficherUnMessageDeBienvenueAvecLeNom );

AfficherUnMessageDeBienvenueAvecLeNom ();

/*
ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.
  
  En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :
  
      A. L'ajout de l'utilisateur dans le tableau.
      B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.
      
      Ex. Merci Hugo ! Tu es maintenant inscrit.
      Voici la liste de nos Membres :
      
          Hugo : 26ans
          Rodrigue : 56ans
          ...
          
      NB : Devra bien entendu s'afficher le membre qui vient de s'inscrire.
     */

            // 4. verifier que l'âge est respecté ainsi que le pseudo entré n'existe pas déjà (les 2 fonctions ci-dessus fonctionnent)

            function verifForm(f)
                            {
                var pseudoOk = verifierLaSaisieDeMonPseudo(f.pseudo);
                var ageOk = verifAge(f.age);
   
                    if(pseudoOk && ageOk)
                        return true;
                    else
                    {
                        alert("Veuillez remplir correctement tous les champs");
                        return false;
                    }
                    }

                    // A.le bouton "s'inscrire" est actif

                    if (verifForm=true){
                        document.getElementById("submit").disabled = false;

                    }

                        
                    //  B.En cliquant dessus devrait enclencher un événement (click)

                            // a.ajouter le nouveau utilisateur dans le tableau avec (Push)

                            console.log(membres);
                            console.log(membres.length);
                           
                            var listeDesUtilisateurs = membres.push(pseudo.value);
                            
                            console.log(membres);
                            console.log(listeDesUtilisateurs);
                           

                            // b. Message de bienvenue affiché

                            // c. Affiche la liste de tous les utilisateurs (ul) y compris le nouveau




    // 

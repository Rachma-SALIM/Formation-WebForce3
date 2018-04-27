// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Tableau indexé d'objet Contact
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    /**
     * Après vérification des informations, la fonction permet
     * d'ajouter un Contact dans notre "CollectionDeContacts",
     * réinitialiser le formulaire et déclencher une notification.
     * @param {*} Contact 
     */
         function ajouterContact(Contact) {

        // -- Ajouter "Contact" dans "CollectionDeContacts"
        CollectionDeContacts.push("Contact");
        
        // -- On cache la phrase : Aucun Contact.
        $('.aucuncontact').hide();
    
        // -- Mise à jour du HTML (guillemets invérsés pour garder la presentation.); 2 méthodes ici ( soit la concaténation ou le sélécteur JQ)
        $(`
            <tr>
                <td>` + Contact.nom + `</td>
                <td>${ Contact.prenom }</td>
                <td>${ Contact.email }</td>
                <td>${ Contact.tel }</td>
            </tr>
         `).appendTo($('#LesContacts > tbody'));
        //  les autres $ en bleu peuvent être écrits seulement avec des guillemets inversés. Autrement ce code peut s'écrire ainsi: $('<tr><td>' +Contact.nom+ '</td><td>' + Contact.prenom.... etc)
        // les $ en bleu sont une syntaxe JS et pas JQ, ici ça remplace la concaténation.
        // -- Réinitialisation du Formulaire
        reinitialisationDuFormulaire();
   

        // -- Affiche une Notification (BONUS)
       
        $('.alert-contact').fadeIn().delay(4000).fadeOut();
        }

    /**
     * Réinitialise les champs du Formulaire
     * reset() du Formulaire.
     */
    function reinitialisationDuFormulaire() { 
    //    En jQuery, 3 méthodes (eq pour JQ get pour JS)
        // $('#contact').reset;  
        //  1ère méthode
        // $('#contact').get(0).reset();
        // 2nd méthode
        $('#contact.form-control').val('');
        // 3eme méthode

        // -- En Javascript
        // document.getElementById("contact").reset();
        }
  

    /**
     * Vérifie que l'email respecte
     * bien le bon format.
     * @param {*} email 
     */
    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return emailReg.test(email);
    }
    
    /**
     * Vérifie que le numéro de téléphone
     * respecte le format Français
     * @param {*} tel 
     */
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    /**
     * Vérifie si un Contact est présent
     * dans le tableau JS "CollectionDeContacts"
     * @param {*} Contact 
     */

    /*//  var est déconseillée . Mieux vaut utiliser let pour éviter les conflits
    function unContactEstPresent(Contact) { 
        let contactExiste = false;
        for ( let i=0; i<CollectionDeContacts.length; i++) {
            if (CollectionDeContacts[i].email===Contact.email ){
                contactExiste = true;
                break;
            }
        }
         return contactExiste;
    }*/

    function unContactEstPresent(Contact) {

        // -- Booleen qui indique la présence d'un contact dans ma collection
        let estPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance
        for(let i = 0 ; i < CollectionDeContacts.length ; i++) {

            if(Contact.email === CollectionDeContacts[i].email) {
                // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                estPresent = true;
                // -- On arrête la boucle, plus besoin de poursuivre.
                break;
            }
        }
        // -- On retourne le booleen
        return estPresent;
    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon formulaire
    $('#contact').on('submit', function(e) {

        
        // -- Stopper la redirection de la page
                e.preventDefault();

        // -- Récupération des champs à vérifier

        const nom = $('#nom');
        const prenom = $('#prenom');
        const email = $('#email');
        const tel = $('#tel');

        // -- Réinitialiser les erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .help-block').remove();

   
        // -- Vérification des informations
        // (Autre méthode) let MonFormulaireEstValide=true;

            // -- Vérification du Prénom
        if (prenom.val().length === 0) { 
            prenom.parent().addClass('has-error');
            $("<p class='help-block'>N'oubliez pas de saisir votre prénom.</p>").appendTo(prenom.parent());
            // MonFormulaireEstValide=false;
        } else {
            prenom.parent().addClass ('has-success');
        }
            // -- Vérification du Nom
         if (nom.val().length === 0) {
             nom.parent().addClass('has-error');
            $("<p class='help-block'>N'oubliez pas de saisir votre nom.</p>").appendTo(nom.parent());
            // MonFormulaireEstValide=false;
        } else {
            nom.parent().addClass ('has-success');
         }
            // -- Vérification du Mail
        if (!validateEmail(email.val())){

             email.parent().addClass('has-error');
            $("<p class='help-block'>N'oubliez pas de saisir un Email valide.</p>").appendTo(email.parent());
            // MonFormulaireEstValide=false;
        }
        else {
                email.parent().addClass('has-success');
        }
            // -- Vérification du Tel
        if ( ! validateTel( tel.val() ) ) {
            tel.parent().addClass('has-error');
            $("<p class='help-block'>Vérifiez votre numéro de téléphone.</p>").appendTo(tel.parent());
            // MonFormulaireEstValide=false;
        }
        else {
            tel.parent().addClass('has-success');
        }

         // -- Si toutes mes informations sont valides
        // Autre méthode 
        // let ChampsAVerifier = $('#contact input:not([type=submit])');
        // console.log(ChampsAVerifier); 
        // for(let i = 0 ; i < ChampsAVerifier.length ; i++) {
        //     if( $(ChampsAVerifier).eq(i).val().length === 0 ) {
        //      alert ('Attention, veuillez remplir tous les champs.')  ;
        //      }else{
               

         if (!MonFormulairEstValide){
             alert ('Attention, veuillez remplir tous les champs.')  ;
            }else 
        
            /**
             * Si le contact est présent dans la collection, on informe l'utilisateur
             * Sinon, on peut procéder à la suite du traitement.
             *
             */
            let Contact = {
                "nom"       : nom.val(),
                "prenom"    : prenom.val(),
                "email"     : email.val(),
                "tel"       : tel.val()
                            }

            //  On ne peut appeler le booléen ici estPresent car c'est dans la fonction; il faut appeler la fonction ici
                 if (unContactEstPresent (Contact)){
                     alert ('Attention, ce contact existe déjà');
                } else{
                     ajouterContact(Contact)
                }
                
        
    }); // -- Fin de $.submit()

}); 
// -- Fin de $()
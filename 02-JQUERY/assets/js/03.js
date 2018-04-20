/* **************LE CHAINAGE DE METHODE AVEC JQUERY*****************








*/


$(function(){
 console.log( $('div'));

//  Je souhaite cacher toutes les div de ma page html
    $('div').hide('slow', function (){

        

        // Une fois que la méthode hide () est terminée, mon alerte peut s'exécuter!
        //  La fonction s'exécute par défault pour chaque élément du sélécteur, càd ici pour chaque div

        // alert ('Fin du Hide');

     /*    $ ( ' div').css ('background', 'yellow');
        $ ( ' div').css ('color', 'red');
        $ ( ' div').show ('slow')
         */
        //  Above, too long whereas it's supposed to be simpler; =>  chaining method

        // $('p').hide (1000).css('color', 'blue').css ('font-size', '20px').delay (2000).show (500);
        
        $('p').hide (1000).css({'color': 'blue','font-size': '20px'}).delay (2000).show (500);
        
        
      
    }); //  Fin du hide()
    
 });
// Fin de $()
/****************LES SELECTEURS JQUERY****************
 * 
 * Format: $ ('selecteur')
 * en Jquery, tous les sélecteurs CSS sont disponibles...
 *
 * 
 */

 $(function(){

    l=e=>console.log(e);
    // sélectionner toutes les balises SPAN

    // l(document.getElementsByTagName('span')); en JS
    l ($('span'));
    // en JQ

    // Sélectionner mon menu grâce à son ID
    l(document.getElementById('menu'));
    l($('menu'));

    //   // Sélectionner un élément par sa classe
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));


    // Selectionner un attribut
    l($('[href="#"]'));

 })
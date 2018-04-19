/* LE DOM

Le DOM est une interface de développement en JS pour HTML. Grâce au DOM, je vais être en mesure d'accéder ou modifier mon HTML.

L'objet "document" est le point d'entrée vers mon conteu HTML. Chaque page chargée dans mon navigateur a un objet "document".

comment faire pour récupérer les différentes informations de ma page html?

1. Utiliser document.getElementById

 Celle-ci est une fonction qui va permettre de récupérer un élèment html à partir de son identifiant unique:ID
*/

var bonjour=document.getElementById ('bonjour');
console.log(bonjour);

/* 2.document.getElementsByClassName

Celle-ci est une fonction qui va permettre de récupérer un ou plusieurs élèments (une liste) html à partir de leur classe. 


*/

var contenu =document.getElementsByClassName('contenu');
console.log(contenu);

//  ATTENTION! ICI CELA NOUS RENVOIE A UN TABLEAU JS AVEC MES ELEMENTS HTML (Collection HTML).

/* 3. document.getElementsByTagName 

Celle-ci est une fonction qui va permettre de récupérer un ou plusieurs élèments (une liste) à partir de leur nom de balise*/

var span =document.getElementsByTagName('span');
console.log(span);
//  ATTENTION! ICI CELA NOUS RENVOIE A UN TABLEAU JS AVEC MES ELEMENTS HTML (Collection HTML).
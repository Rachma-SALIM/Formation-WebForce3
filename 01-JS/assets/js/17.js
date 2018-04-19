/************ LA GESTION DU TEMPS************
 

La fonction "setTimeout" me permet de spécifier une fonction à exécuter au bout d'une durée définie.
 */

function Hello (){ alert ('Bonjour toi! Que fais -tu ici?')};

/**
 * 1.La fonction à exécuter
 * 2. La durée en millisecondes.
 */

 setTimeout (Hello, 3000);

 /**
  * La fonction "setInterval" me permet d'exécuter une fonction à un intervalle régulier défini.
 */

 setInterval (Hello,3000);
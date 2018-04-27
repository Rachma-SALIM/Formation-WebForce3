/**
 * Pour déclarer une classe comme composant de notre application, on importe "Component" via @angular/core
 */

import { Component } from '@angular/core';

class Contact {
  id        : number;
  name      : string;
  username  : string;
  email     : string;
  address?   : object;
  phone ?    : number;
  website?   : string;
  company?   : object;

}

//@component est un décorateur. Il va nous permettre de définir 3 paramètres essentielles à notre application...

@Component({
  // Le sélécteur détermine la manière dont le composant sera affiché dans votre html: <app-root><:app-root>. Vous devez OBLIGATOIREMENT  avoir la balise d'ouverture et de fermeture.
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la partie visible du composant. C'est ce qui s'affiche à l'écran lorsque le composant est utilisé.
   * /**
   * template:`<h1< Bienvenue aux Mureaux...</h1>`
   */
  templateUrl: './app.component.html',

  /**
   * La déclaration des styles avec "styleUrls" ou "styles[]"
   */
  styleUrls: ['./app.component.css']
//styles:[`h1 {color:blue;}`],
})

/**
 * LA classe contient les données du composant, mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe correspond au ViewModel.
 */
export class AppComponent {
  // La déclaration d'une variable titre
  title = 'Gestion de mes Contacts';

  //Contact choisi par mon utilisateur de type Contact
  contactActif:Contact;

  //Déclaration d'un Objet Contact
  unContact = {
    id: 1,
    name: 'Hugo Liegeard',
    username: 'Hugoliegeard',
    email: 'wf3@hl-media.fr'
  };

  mesContacts = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      username: 'hugoliegeard',
      email: 'wf3@hl-media.fr'
    },
    {
      id: 2,
      name: 'Greg D\'HAEM',
      username: 'gregdhaem',
      email: 'greg.d@hl-media.fr'
    },
    {
      id: 3,
      name: 'Salim SOUMARE',
      username: 'salimsoumare',
      email: 'salim.s@hl-media.fr'
    },
    {
      id: 4,
      name: 'Cheffia BENALLAL',
      username: 'cheffiabenallal',
      email: 'cheffia.b@hl-media.fr'
    }
  ];

// Tout est dans la classe  AppComponent exportée; on peut également typer nos tableaux


//Ma fonction choisirContact, prend un contact en paramètre et le transmet à la variable contactActif; This correspond ici au component appComponent.

choisirContact (contactCliqueParMonUtilisateur){
  this.contactActif = contactCliqueParMonUtilisateur; console.log (this.contactActif);
}
}

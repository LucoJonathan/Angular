import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
      /*Déclaration de variables
      *
      *  visibilité (par défaut dans une classe : public) nomDeVariable : typeDeVariable = valeur (par défaut : undifined)
      *il peut y avoir plusieurs types associé, et dans ce cas ils seront séparés par |
      * */
  /*
  * public value: any = undefined
  * value: any
  * ces deux lignes sont équivalentes
  */

  multiTypeValue : number | undefined

}

import {Component} from '@angular/core';

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
  */
  /*
  * public value: any = undefined
  * value: any
  * ces deux lignes sont équivalentes
  */

  /*
  * multiTypeValue : number | undefined
  * optionalValue? : number
  * ces deux lignes sont équivalentes
  */

  multiTypeValue: string | undefined
  optionalValue?: string // ajoute un ? au nom de variable équivaut à " | undefined" au niveau des types
  assertedValue!: string // ajouter un ! au nom de variable assure pour TypeScript que la valeur sera affectée et ignore 'undefined' par défaut

  useNumber(value?: string) /* On peux mettre value?: le type ou alors value: le type | undefined*/ {
    /*    if (typeof value === "string")
        {
          console.log("value.length", value.length)
        }else{
          console.log("value.length", undefined)
        }*/
    console.log("value.length", value?.length) // remplace les lignes au dessus
  }

  constructor() {
    this.assertedValue = "une valeur"
    this.useNumber(this.multiTypeValue)
    this.useNumber(this.optionalValue)
    this.useNumber(this.assertedValue)
  }
}

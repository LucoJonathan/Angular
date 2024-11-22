import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /*
    /!*Déclaration de variables
    *
    * visibilité (par défaut dans une classe : public) nomDeVariable : typeDeVariable = valeur (par défaut : undefined)
    * il peut y avoir plusieurs types associés, et dans ce cas, ils seront séparés par |
    * *!/

    /!*
    * public value: any = undefined
    * value: any
    * ces deux lignes sont équivalentes
    *!/

    multiTypeValue : string | undefined
    optionalValue? : string // ajouter un ? au nom de variable équivaut à " | undefined" au niveau des types
    assertedValue! : string // ajouter un ! au nom de variable assure pour TypeScript que la valeur sera affectée et ignore 'undefined' par défaut


    useNumber(value?: string) {
      /!*if (typeof value === "string") {
        console.log("value.length", value.length)
      } else {
        console.log("value.length", undefined)
      }*!/
      console.log("value.length", value?.length)
    }

    constructor() {
      this.assertedValue = "uneValeur"
      this.useNumber(this.multiTypeValue)
      this.useNumber(this.optionalValue)
      this.useNumber(this.assertedValue)
    }*/

  titre: string = "UnTitre"
}

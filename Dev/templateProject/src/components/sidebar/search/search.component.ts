import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule], // FormsModule fournit un outil pour synchroniser la valeur de balises HTML dies de Formulaires
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

    @Input()  // Indique que ce composant est prêt à recevoir un attribut
    childValue: string =  "ChildValue"

  @Output() // Indique que ce composant transmet des informations via un évènement
  childValueChange: EventEmitter<string> = new EventEmitter<string>()

    onChange(event: Event){
          this.childValue =  (event.target as HTMLInputElement).value
      this.childValueChange.emit(this.childValue)
      this.value = "une Valeur"
      console.log(this.value)
    }

    get value(){
      return this.childValue
    }

    set value(value: string){
      this.childValue = value
    }

}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
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
    }

}

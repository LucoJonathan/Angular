import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SearchComponent} from './search/search.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    SearchComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  parentValue: string = "parentValue"
}

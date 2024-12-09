import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {MiniPost,  MiniPostComponent} from './mini-post/mini-post.component';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    SearchComponent,
    MiniPostComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  parentValue: string = "parentValue"

  @Output() moreClicked: EventEmitter<string> = new EventEmitter<string>()


  protected auth: AuthService = inject(AuthService);
  minipost1 : MiniPost = {
    alt: 'Image alt',
    link: '#',
    src: 'pic08.jpg',
    text: 'hi there'
  }

  miniposts: MiniPost[] = [
/*    this.minipost1,
    {
      alt: 'Alternative',
      link: '#',
      src: 'pic09.jpg',
      text: this.parentValue
    },
    {
      alt: 'Image alt',
      link: 'Liiink',
      text: 'hi there'
    }*/
  ]

}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mini-post',
  standalone: true,
  imports: [],
  templateUrl: './mini-post.component.html',
  styleUrl: './mini-post.component.css'
})
export class MiniPostComponent {

  @Input({required: true}) minipost!: MiniPost


}


export interface MiniPost {
  src?: string
  link: string
  alt: string
  text: string
}

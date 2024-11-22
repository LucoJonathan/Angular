import {Component, Input} from '@angular/core';
import {Article} from '../article';



@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input({required: true}) article! : Article
}

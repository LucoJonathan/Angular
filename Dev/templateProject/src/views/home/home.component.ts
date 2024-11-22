import {Component, inject} from '@angular/core';
import {Article} from './article';
import {ArticleComponent} from './article/article.component';
import {ArticleService} from '../../service/article.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArticleComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /* data: Article[] = []
 constructor(service: ArticleService) {
    service.all().subscribe(result => this.data = result)
  }*/

/*  data: Observable<Article[]>

  constructor(service: ArticleService) {
    this.data = service.all()
  }*/
  protected service: ArticleService = inject(ArticleService)
  data = this.service.all()

}

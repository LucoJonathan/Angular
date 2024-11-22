import { Injectable} from '@angular/core';
import {Article} from '../views/home/article';
import {AbstractService} from '../tools/abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends AbstractService<Article>{

  protected readonly ENDPOINT : string = "http://localhost:3000/articles"

}

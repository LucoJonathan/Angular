import { Injectable} from '@angular/core';
import {Article} from '../views/home/article';
import {AbstractService} from '../tools/abstract-service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends AbstractService<Article>{

  protected readonly ENDPOINT : string =  "/articles"

}

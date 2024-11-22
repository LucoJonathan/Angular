import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../views/home/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private http: HttpClient = inject(HttpClient)
  private readonly ENDPOINT : string = "http://localhost:3000/articles"

  all() {
    return this.http.get<Article[]>(this.ENDPOINT)
  }

  byId(id: number) {
    return this.http.get<Article>(`${this.ENDPOINT}/${id}`)
  }

  save(article: Article) {
    return this.http.post<Article>(this.ENDPOINT, article)
  }

  update(article: Article) {
    return this.http.put<Article>(`${this.ENDPOINT}/${article.id}`, article)

  }

  delete(id: number) {
    return this.http.delete<Article>(`${this.ENDPOINT}/${id}`)
  }
}

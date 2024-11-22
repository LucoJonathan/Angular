import { Component } from '@angular/core';
import {Article} from './article';
import {ArticleComponent} from './article/article.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArticleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: Article[] = [
    {
      id: 1,
      titre: "Interdum aenean",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      src: "pic01.jpg",
      alt: "",
      lien: "#"
    },
    {
      id: 2,
      titre: "Nulla amet dolore",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      src: "pic02.jpg",
      alt: "",
      lien: "#"
    },
    {
      id: 3,
      titre: "Tempus ullamcorper",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      src: "pic03.jpg",
      alt: "",
      lien: "#"
    },
    {
      id: 4,
      titre: "Sed etiam facilis",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      src: "pic04.jpg",
      alt: "",
      lien: "#"
    },
    {
      id: 5,
      titre: "Sed etiam facilis",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      alt: "",
      lien: "#"
    },
    {
      id: 6,
      titre: "Feugiat lorem aenean",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      src: "pic05.jpg",
      alt: "",
      lien: "#"
    },
    {
      id: 7,
      titre: "Amet varius aliquam",
      description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      src: "pic06.jpg",
      alt: "",
      lien: "#"
    }]
}

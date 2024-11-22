import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AbstractFormComponent} from '../../tools/abstract-form-component';
import {ArticleService} from '../../service/article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.css'
})
export class ArticleEditorComponent extends AbstractFormComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    src: new FormControl(null),
    lien: new FormControl("", {validators: [Validators.required]}),
    titre: new FormControl("", {validators: [Validators.required]}),
    alt: new FormControl("", {validators: [Validators.required]}),
    description: new FormControl("", {validators: [Validators.required]})
  });

  pics: string[] = new Array(11) // crée un tableau de la taille souhaitée
    .fill(0) // affecte la même valeur à tous les éléments du tableau
    .map((v, i) => `pic${(i + 1).toString().padStart(2, '0')}.jpg`) // transforme chaque valeur en utilisant ici leur index

  constructor(private service: ArticleService, private router: Router, route: ActivatedRoute) {
    super();
    route.paramMap.subscribe(param => {
      const id: number = +param.get('id')! // permet de changer l'id grace a l'obsevable et tiens compte des changement meme si le composant n'a pas changé
      service.byId(id).subscribe({
        // Résultat obtenu si tout ce passe bien a chanque changement
        next: result => this.form.patchValue(result),
        // Annonce qu'il n'y aura plus de changement emit l'obseverveur s'arrete
        complete: () => console.log("fin des appels"),
        // en cas d'erreur lors d'une tentative de changement
        error: e => this.form.reset()
      })
    })
    //this.service = service //pas besoin grace au private d'en haut
  }

  // Pas besoin du constucteur grace a la ligne en dessous

  /*  private service: ArticleService = inject(ArticleService)
    private router: Router = inject(Router)*/


  onSubmit$(): void {
/*    if (this.form.value.id) {
      this.service.update(this.form.value).subscribe(() => this.router.navigate(['/home']))
    } else {
      this.service.save(this.form.value).subscribe(() => this.router.navigate(['/home']))
    }*/

    //(this.form.value.id ? this.service.update(this.form.value) : this.service.save(this.form.value)).subscribe(() => this.router.navigate(['/home']))

    this.service[this.form.value ? 'update' : 'save'](this.form.value).subscribe(() => this.router.navigate(['/home']))
  }
}

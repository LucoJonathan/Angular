import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    // Demande au router de s'assurer que l'URL "complete" dans le navigateur est exactement la même que le path de cette route
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    // loadComponent: () => import().then(m => )
    loadComponent: () => import('../views/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: "generic",
    loadComponent: () => import('../views/generic/generic/generic.component')
      .then(m => m.GenericComponent)
  },
  {
    path: "elements",
    loadComponent: () => import('../views/element/element/element.component')
      .then(m => m.ElementsComponent)
  },
  {
    path: "form-control",
    loadComponent: () => import('../views/form-control/form-control.component')
      .then(m => m.FormControlComponent)
  },
  {
    path: "login",
    loadComponent: () => import('../views/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import('../views/register/register.component')
      .then(m => m.RegisterComponent)
  },
  {
    path: "editor/:id",
    loadComponent: () => import('../views/article-editor/article-editor.component')
      .then(m => m.ArticleEditorComponent),
    canMatch: []
  },
  {
    path: "**", // Wildcard (toute valeur)
    loadComponent: () => import('../views/not-found/not-found.component')
      .then(m => m.NotFoundComponent)
  }
];

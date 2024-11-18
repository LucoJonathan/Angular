import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",

  },
  {
    path: "home", // Le chemin
    loadComponent: () => import('../views/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: "**",
    loadComponent: () => import('../views/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
// nomDeVariable : TypeDeVariable

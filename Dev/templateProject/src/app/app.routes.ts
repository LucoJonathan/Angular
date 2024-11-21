import {Routes} from '@angular/router';
import {Component} from '@angular/core';

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
    path:"generic",
    loadComponent: () => import('../views/generic/generic/generic.component').then(m => m.GenericComponent)
  },
  {
    path:"elements",
    loadComponent: () => import('../views/element/element/element.component').then(m => m.ElementComponent)
  },
  {
    path: "login",
    loadComponent: () => import('../views/login/login.component').then(m => m.LoginComponent)
  },
  {
    path:"form-control",
    loadComponent: () => import('../views/form-control/form-control.component').then(m => m.FormControlComponent)
  },
  {
    path:"register",
    loadComponent: () => import('../views/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: "**",
    loadComponent: () => import('../views/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
// nomDeVariable : TypeDeVariable

import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  // {
  //   path: 'home',
  //   loadComponent: () => import('./tabs/home/home.page').then( m => m.HomePage)
  // },
];

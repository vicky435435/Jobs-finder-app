import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    component : TabsPage,
    children : [
        {
            path: 'home',
            loadComponent: () => import('./home/home.page').then( m => m.HomePage)
        },
        {
            path : '',
            redirectTo : '/tabs/home',
            pathMatch : 'full'
        }
    ],
  },

];

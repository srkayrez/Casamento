import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./home/home').then(m => m.Home)},
    {path: 'presente', loadComponent: () => import('./presente/presente').then(m => m.Presente)},
    {path: 'confirmacao', loadComponent: () => import('./confirmacao/confirmacao').then(m => m.Confirmacao)},
];

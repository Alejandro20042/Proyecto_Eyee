import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"dashboard",
        loadComponent:() => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'login', 
                title: 'Login',
                loadComponent:() => import ('./dashboard/login/login.component')
            },
            {
                path: 'registro',
                title: 'Registro',
                loadComponent: () => import ('./dashboard/registro/registro.component')
            },
            {
                path: '', redirectTo: 'control-flow', pathMatch: 'full'

            },
            
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard/login',
        pathMatch: 'full'

    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: "login",
        loadComponent: () => import("../pages/home").then((m) => m.HomePage)
    }
];

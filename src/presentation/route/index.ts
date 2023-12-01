import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: "login",
        loadComponent: () => import("../pages/login").then((m) => m.LoginPage)
    },
    {
        path: "sign-up",
        loadComponent: () => import("../pages/home").then((m) => m.HomePage)
    }
];

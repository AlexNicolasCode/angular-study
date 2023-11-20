import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("../pages/home").then((m) => m.HomePage)
    }
];

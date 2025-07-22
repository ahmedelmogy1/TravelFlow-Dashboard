import { Routes } from '@angular/router';
import { LogIn } from './components/log-in/log-in';
import { Dashboard } from './components/dashboard/dashboard';
import { DashboardVisual } from './components/dashboard-visual/dashboard-visual';

export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:'login' , component:LogIn},
    {path:'dashboard',component:Dashboard,children:[
        {path:'', redirectTo:"DashboardVisual", pathMatch:"full"},
        {path:"DashboardVisual",component:DashboardVisual}
    ]}
]

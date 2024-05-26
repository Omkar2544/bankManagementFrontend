import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtherDashboardComponent } from './other-dashboard/other-dashboard.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'otherdashboard', component:OtherDashboardComponent},
    {path: '', redirectTo:'login' ,  pathMatch:'full'},
    {path: '**', redirectTo:'login'}

];

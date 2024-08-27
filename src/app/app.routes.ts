import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Dashboardcomponent } from './dashboard/dashboardcomponent';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {path:'register',component:RegistrationComponent},
    {path:'dashboard',component:Dashboardcomponent}
  ];

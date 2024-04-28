import { TokenSession } from './models/user.interface';
import { AppComponent } from './app.component';
import { authGuardGuard } from './auth-guard.guard';
import { ClinicalHistoryComponent } from './clinical-history/clinical-history.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AppointmentsComponent } from './appointments/appointments.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: redirect(),
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  {
    canActivate: [authGuardGuard],
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      { path: 'clinical-history/:patiendId', component: ClinicalHistoryComponent },
      { path: 'appointments', component: AppointmentsComponent },
    ],
  }
];

function redirect() {
  const token = localStorage.getItem('token');
  if (token) {
    const TokenSession : TokenSession = JSON.parse(token)
    if(TokenSession.expiration < Date.now()){
      return 'login';
    }
    return 'home';
  } else {
    return 'login';
  }
}

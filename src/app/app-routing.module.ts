import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

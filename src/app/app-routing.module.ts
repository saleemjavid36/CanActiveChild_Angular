import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './components/hello.component';
import { HolaComponent } from './components/hola.component';
import { LoginComponent } from './components/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'greetings', canActivateChild: [AuthGuard], 
  children: [
    { path: '', component: HelloComponent },
    { path: 'hola', component: HolaComponent } 
  ]},
  { path: '', pathMatch: 'full', redirectTo: 'greetings' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

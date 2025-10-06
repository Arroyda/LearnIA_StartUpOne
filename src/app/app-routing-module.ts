import { PageNotFound } from './page-not-found/page-not-found';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Courses } from './courses/courses';
import { Plans } from './plans/plans';
import { Login } from './login/login';
import { SingUp } from './sing-up/sing-up';
import { Home } from './home/home';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'profile', component: Profile},
  {path: 'courses', component: Courses},
  {path: 'plans', component: Plans},
  {path: 'login', component: Login},
  {path: 'register', component: SingUp},
  {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

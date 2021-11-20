import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/authGuard';
const routes: Routes = [
  {path:'login',canActivate: [AuthGuard], loadChildren: ()=> import('./login/login.module').then(m=> m.LoginModule) },
  {path:'register', loadChildren: ()=> import('./register/register.module').then(m=> m.RegisterModule) },
  {path:'User', loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule) },
  {path:'blog', loadChildren: ()=> import('./blog/blog.module').then(m=> m.BlogModule) },
  {path:'', loadChildren: ()=> import('./blog/blog.module').then(m=> m.BlogModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

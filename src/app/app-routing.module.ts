import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'login', loadChildren: ()=> import('./login/login.module').then(m=> m.LoginModule) },
  {path:'User', loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule) },
  {path:'blog', loadChildren: ()=> import('./blog/blog.module').then(m=> m.BlogModule) },
  {path:'', loadChildren: ()=> import('./blog/blog.module').then(m=> m.BlogModule) },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

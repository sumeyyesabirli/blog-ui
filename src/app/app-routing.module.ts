import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/authGuard';
const routes: Routes = [
  {path:'login',canActivate: [AuthGuard], loadChildren: ()=> import('./login/login.module').then(m=> m.LoginModule) },
  {path:'register', loadChildren: ()=> import('./register/register.module').then(m=> m.RegisterModule) },
  {path:'User', loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule) },
  {path:'blog', loadChildren: ()=> import('./blog/blog.module').then(m=> m.BlogModule) },
  {path:'', loadChildren: ()=> import('./blog/blog.module').then(m=> m.BlogModule) },
  {path:'add-post', canActivate:[AuthGuard] , loadChildren: ()=> import('./add-post/add-post.module').then(m=> m.AddPostModule) },
  {path:'single-post', loadChildren:()=> import('./post-single/post-single.module').then(x=> x.PostSingleModule)},
  {path:'about-me', loadChildren:()=> import('./about-me/about-me.module').then(x=> x.AboutMeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

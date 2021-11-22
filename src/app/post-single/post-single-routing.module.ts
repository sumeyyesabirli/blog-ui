import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostSingleComponent } from './post-single.component';


const routes: Routes = [
  {path:'',component:PostSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostSingleRoutingModule { }

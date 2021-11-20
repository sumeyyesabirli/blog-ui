import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
     BlogRoutingModule,  
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     CommonModule
  ]
})
export class BlogModule { } 


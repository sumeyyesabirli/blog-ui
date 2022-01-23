import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PostSingleRoutingModule } from './post-single-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { PostSingleComponent } from './post-single.component';


@NgModule({
  declarations: [
    PostSingleComponent
  ],
  imports: [
      PostSingleRoutingModule,  
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     CommonModule,
     FlexLayoutModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatCardModule,
     MatToolbarModule,
     HttpClientModule,
     FormsModule,
     MatButtonToggleModule,
     MatSnackBarModule,
     MatSelectModule,
     NgSelectModule,
    
  ]
})
export class PostSingleModule { } 


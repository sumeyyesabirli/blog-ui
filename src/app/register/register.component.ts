import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from '../_services/http.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any = {};
  addUser : any = {};
  constructor(private httpClient : HttpService, private _snackbar : MatSnackBar, private router : Router) { 
      console.log(this.addUser)
  }

  

  ngOnInit() {

  }

    save(){      
      this.httpClient.Post("users",this.addUser).subscribe(ref=>{
        console.log(ref);
        this._snackbar.open("Kayıt Başarılı!")._dismissAfter(3000);
        this.router.navigateByUrl('/login');
      })
    }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpService } from '../_services/http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavBarComponent } from '../_components/nav-bar/nav-bar.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  /**
   *
   */
  constructor(private authService : AuthService, private _snackbar : MatSnackBar, private router : Router) {
    
  }
  /**
   * 
   */
  ngOnInit() {
  }

  /**
   * 
   */
  login() {
    console.log(this.loginModel);
      this.authService.login(this.loginModel.username, this.loginModel.password).subscribe(ref=>{

        localStorage.setItem('user', JSON.stringify(ref));
        
        this._snackbar.open('Giriş Başarılı')._dismissAfter(3000); //ekranda 3000ms yani 3 saniye kalsın
        window.location.reload();
        this.router.navigateByUrl('/blog');

    }, err =>{
      this._snackbar.open(err.error)._dismissAfter(3000); //ekranda 3000ms yani 3 saniye kalsın
      console.log(err);
      
    });
  }
}

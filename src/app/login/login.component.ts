import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel : any = {

  };
  ngOnInit() {
  }
  login(){
    console.log(this.loginModel);
    
  }
}

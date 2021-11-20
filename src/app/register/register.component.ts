import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any = {};
  addUser : any = {};
  constructor(private httpClient : HttpService) { 
      console.log(this.addUser)
  }

  

  ngOnInit() {

  }

    save(){      
      this.httpClient.Post("users",this.addUser).subscribe(ref=>{
        console.log(ref);
        
      })
    }

}

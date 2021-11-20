import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {};
  addUser : any = {};
  constructor(private httpClient : HttpService) { 
      this.getById(1);
      console.log(this.addUser)
  }

  

  ngOnInit(): void {

  }

    getById(id:number){
      this.httpClient.Get("users/getById",{"id":id}).subscribe(ref=>{
        console.log(ref);
        this.user = ref;
      });
    }

    save(){      
      this.httpClient.Post("users",this.addUser).subscribe(ref=>{
        console.log(ref);
        
      })
    }
}

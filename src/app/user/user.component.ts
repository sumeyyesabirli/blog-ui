import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../_services/http.service';
//  import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  formGroup!:FormGroup;
  constructor(private httpService:HttpService){}

  ngOnInit()  {
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      username:new FormControl("",[Validators.required]),
      passsword:new FormControl("",[Validators.required])
    })
  }
  userProces(){
    if (this.formGroup.valid) {
      this.httpService.user(this.formGroup.value).subscribe(result =>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }else{
          alert(result.message);
        }
      });
      
    }

  }
}
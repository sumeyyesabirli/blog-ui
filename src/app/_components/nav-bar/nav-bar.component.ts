import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogin : boolean = false;
  username : string = "";
  constructor() {
      this.setNav();
   }

  public setNav(){
    let text = localStorage.getItem('user');
      console.log(text);
      
      if(text){
        let user =JSON.parse(text);
        this.isLogin = true;        
        console.log(user);
        
        this.username = user.username;
      }else{
        this.isLogin = false;
      }
  }
   logout(){
    localStorage.clear();
     this.isLogin = false;
     window.location.reload()

   }

  ngOnInit(): void {
  }

}

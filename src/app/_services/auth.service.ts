import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private getHeaders(){
    return new HttpHeaders({
      "Content-Type": "application/json",
    })
  }
  constructor(private httpClient:HttpClient) {

   }


   /**
    * 
    * @param url
    * @param params 
    * @returns 
    */
   public login(username : string, password : string){
       let body :any =  {
        username : username,
        password : password
    };
      return this.httpClient.post<any>(`${apiUrl}users/login`, body, { headers: this.getHeaders()});
   }

   public logout(){
 }

}

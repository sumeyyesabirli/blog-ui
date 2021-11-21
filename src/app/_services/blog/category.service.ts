import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  constructor(private httpClient:HttpService) {

   }

   /**
    * 
    * @param url
    * @param params 
    * @returns 
    */
   public getAllCategories(){
     return this.httpClient.Get("categories");
   }

  
}

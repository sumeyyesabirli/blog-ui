import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
  constructor(private httpClient:HttpService) {

   }

   /**
    * 
    * @param url
    * @param params 
    * @returns 
    */
   public getLastPosts(){
     return this.httpClient.Get("posts/get-last-tree-posts");
   }

  public addPost(items : any){
    return this.httpClient.Post("posts",items);
  }

  public getPost(id:number){
    return this.httpClient.Get(`posts/${id}`);
  }
  
}

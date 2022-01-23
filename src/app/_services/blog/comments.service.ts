import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  
  constructor(private httpClient:HttpService) {

   }

   /**
    * 
    * @param url
    * @param params 
    * @returns 
    */
   public getCommentsForPost(postId : number){
     return this.httpClient.Get(`comments/${postId}`);
   }

  public addPost(post : any){
      return this.httpClient.Post("comments",post);
  }
}

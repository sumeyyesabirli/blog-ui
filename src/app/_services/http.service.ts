import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules, identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private getHeaders(){
    return new HttpHeaders({
      "Content-Type": "application/json",
    })
  }
  constructor(private httpClient:HttpClient) {

   }

   user(data:any):Observable<any>{
    return this.httpClient.post('${apiUrl}user/user',data)
   }

   public Get(url:string,params?:any){
      return this.httpClient.get(apiUrl + url, {params: params, headers: this.getHeaders()})
   }

   public Post(url:string, data:any){
     console.log('api data');
     console.log(data);
     data.id;
      return this.httpClient.post(apiUrl + url, data , {headers : this.getHeaders()});
   }

  public Delete(url:string, data:any){
    let options={Headers:this.getHeaders(),body:data};
    return this.httpClient.delete(url,options);
    
    

   }

   public Put(url:string, data:any){
    return this.httpClient.put(apiUrl + url, data , {headers : this.getHeaders()});
   

   }
}

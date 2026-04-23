import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public apiUrl: string;

  constructor(private http: HttpClient){
    
    this.apiUrl = "https://jsonplaceholder.typicode.com/";
  }

  getUsers(){

    // HTTP methods
    // GET - get data from the backend
    // POST - save data on the server
    // PUT - update resources
    // DELETE - delete resources
    console.log("Executing HTTP request");
    return this.http.get<any[]>(this.apiUrl+"users")
  }

  getUser(userId: number){
    return this.http.get<any>(this.apiUrl+"users/"+userId);
  }

  createPost(post: any){

    const options = {
      headers: new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': "YOUR_TOKEN"
      })      
    };

    return this.http.post(`${this.apiUrl}posts`, post, options);
  }


}

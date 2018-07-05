import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = `http://localhost:3001/api/users`;

  constructor(private http: HttpClient) {

  }

  get(token){
    return this.http.get(
      `${this.url}?token=${token}`, 
    )    
  }
}

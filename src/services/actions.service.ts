import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private url: string = `http://localhost:3001/api/actions`;

  constructor(private http: HttpClient) {

  }

  get(token){
    return this.http.get(
      `${this.url}?token=${token}`, 
    )    
  }
}

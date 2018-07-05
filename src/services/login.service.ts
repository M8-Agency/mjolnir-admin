import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = `http://localhost:3001/api/auth`;
  private loged: boolean = false;
  private token: string = null

  constructor(private http: HttpClient) {

  }

  public signin(email, password){

    const data = {
      email,
      password,
    }

    return this.http.post(
      `${this.url}/signin`, 
      data
    )
  }

  public setLogin(status, token){
    this.loged = status;
    this.token = token;
  }

  public isLoged(){
    return this.loged;
  }

  public getToken(){
    return this.token;
  }  

}

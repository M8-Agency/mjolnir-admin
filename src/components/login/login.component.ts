import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private LoginService: LoginService, 
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(email, input) {
    this.LoginService.signin(email.value, input.value)
      .subscribe(
        (response) => {
          this.LoginService.setLogin(true, response['token'])
          this.router.navigate(['/dashboard']);
        }, (error) => {
          this.LoginService.setLogin(false, '')
          this.openError(error.message)
        }
      )
  }
  openError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }  
}
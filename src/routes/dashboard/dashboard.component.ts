import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  isLogin = false;
  token = null;

  constructor(
    private LoginService: LoginService,
    private UsersService: UsersService
  ){}

  ngOnInit() {
    this.token = this.LoginService.getToken();
    this.isLogin = this.LoginService.isLoged()

    this.UsersService.get(this.token).subscribe(
      (response)=>{
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )

  }

}

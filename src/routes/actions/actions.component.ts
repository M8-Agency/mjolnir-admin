import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../services/actions.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(
    private LoginService: LoginService,
    private ActionsService: ActionsService
  ) { }

  ngOnInit() {
    this.ActionsService.get(this.LoginService.getToken()).subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        new Error(error)
      })
  }

}

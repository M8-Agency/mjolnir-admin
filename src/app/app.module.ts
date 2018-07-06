import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

//MATERIAL COMPONENTS
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
//SERVICES
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';
import { ActionsService } from '../services/actions.service';
//Routes
import { ActionsComponent } from '../routes/actions/actions.component';
import { DashboardComponent } from '../routes/dashboard/dashboard.component';
import { EmailsComponent } from '../routes/emails/emails.component';
import { UsersComponent } from '../routes/users/users.component';
//COMPONENTS
import { LoginComponent } from '../components/login/login.component';
import { MenuComponent } from '../components/menu/menu.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'emails', component: EmailsComponent },
  { path: 'users', component: UsersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    DashboardComponent,
    EmailsComponent,
    UsersComponent,
    LoginComponent,
    MenuComponent,    
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [
    ActionsService,
    LoginService,
    UsersService
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
  constructor(private LoginService: LoginService, ){
    this.LoginService.loadToken();
  }
 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
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
//Routes
import { DashboardComponent } from '../routes/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
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
    LoginService,
    UsersService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

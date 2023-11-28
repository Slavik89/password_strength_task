import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordService } from './services/password.service';
import { InputComponent } from './components/input/input.component';
import { LineComponent } from './components/line/line.component';

const routes: Routes = [
  { path:'password', component: PasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    InputComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PasswordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

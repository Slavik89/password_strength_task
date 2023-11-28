import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  private _passwordService: PasswordService; 
  password: string="";   
  styles= ['gray', 'gray', 'gray'];  

  constructor(passwordService: PasswordService) { 
    this._passwordService = passwordService;     
  } 
  
  // Variables which change styles for the lines under input

  // A method which gets a password from the input and sends to the service
  getPassword (password: string): void {
    this.password = password;
  }

  getStyles(): string[] {
    return this._passwordService.setStyles(this.password);
  }

  
}

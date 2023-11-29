import { Component } from '@angular/core';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  private _passwordService: PasswordService; 
  password: string="";   

  // Variables which change styles for the lines under input in case it is empty
  styles= ['gray', 'gray', 'gray'];  

  constructor(passwordService: PasswordService) { 
    this._passwordService = passwordService;     
  } 

  // A method which gets a password from the input
  getPassword (password: string): void {
    this.password = password;
  }

  // A method which provides style changes for lines under input
  getStyles(): string[] {
    return this._passwordService.setStyles(this.password);
  }

  
}

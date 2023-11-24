import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  // Variable which gets password
  password: string="";  

  /* variables which contains regular 
  expressions for strings, digits and symbols */
  
  // for easy case
  regexpStrings = /^[a-zA-Z].{7,}$/;
  regexpDigits = /^\d.{7,}$/;
  regexpSymbols = /^[!@#$%^&?() "].{7,}$/;

  // for medium case
  regexpStringsDigits = /^(?=.*\d.*)(?=.*[a-zA-Z].*).{8,}$/;
  regexpStringsSymbols = /^(?=.*[a-zA-Z].*)(?=.*[!@#$%^&?() "].*).{8,}$/;
  regexpDigitsSymbols = /^(?=.*\d.*)(?=.*[!@#$%^&?() "].*).{8,}$/;

  // for strong case
  regexpStrong = /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!@#$%^&?() "].*).{8,}$/;

  // Variables which change styles for the lines under input
  firstLineStyle = 'background-color: gray;';
  secondLineStyle = 'background-color: gray;';
  thirdLineStyle = 'background-color: gray;';

  // A method which gets a password from the input
  getPassword (password: string): void {
    this.password = password;
    this.checkPassword(this.password);
  }

  /*  A method which checks whether password is valid and 
  changes a styles of the lines under input  */
  checkPassword(password: string) {

    // Condition which checks whether password is empty
    if (password !== "") {
      this.firstLineStyle = 'background-color: red;';
      this.secondLineStyle = 'background-color: red;';
      this.thirdLineStyle = 'background-color: red;';
      
      // Condition which checks whether password is easy, medium or strong
      if (this.regexpStrong.test(password)) {
            this.firstLineStyle = 'background-color: green;';
            this.secondLineStyle = 'background-color: green;';
            this.thirdLineStyle = 'background-color: green;';

      } else if ( this.regexpStringsDigits.test(password) ||
                  this.regexpStringsSymbols.test(password) ||
                  this.regexpDigitsSymbols.test(password) ) {
                
                  this.firstLineStyle = 'background-color: yellow;';
                  this.secondLineStyle = 'background-color: yellow;';
                  this.thirdLineStyle = 'background-color: gray;';

      } else if ( this.regexpStrings.test(password) || this.regexpDigits.test(password) || 
                  this.regexpSymbols.test(password) ) {
                   
                    this.firstLineStyle = 'background-color: red;';
                    this.secondLineStyle = 'background-color: gray;';
                    this.thirdLineStyle = 'background-color: gray;';
      }
    } else {
      this.firstLineStyle = 'background-color: gray;';
      this.secondLineStyle = 'background-color: gray;';
      this.thirdLineStyle = 'background-color: gray;';
    }; 
  }
}

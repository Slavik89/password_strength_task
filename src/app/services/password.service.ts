import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {  

  // Variable for styles logic which will contain styles for every lines under input
  styles: string[]=[];

  /* variables which contain regular 
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

  
   /*  A method which checks whether password is valid and 
  changes a styles of the lines under input  */
  setStyles(password: string): string[] {

    if (password !== "" && password.length < 8) {
      this.styles = [];
      this.styles.push('red', 'red', 'red');
    } 
    else if (password !== "" && this.regexpStrong.test(password)) {
        this.styles = [];
        this.styles.push('green', 'green', 'green');
    } 
    else if (password !== "" && (this.regexpStringsDigits.test(password) ||
                                        this.regexpStringsSymbols.test(password) ||
                                        this.regexpDigitsSymbols.test(password)) ) {
        this.styles = [];
        this.styles.push('yellow', 'yellow', 'gray');
    } 
    else if (password !== "" && (this.regexpStrings.test(password) || 
                                      this.regexpDigits.test(password) || 
                                      this.regexpSymbols.test(password)) ) {
      this.styles = [];
      this.styles.push('red', 'gray', 'gray');
    }    
    return this.styles;
  }
}

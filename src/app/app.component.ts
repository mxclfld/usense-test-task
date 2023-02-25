import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  passwordStrength = '';

  checkPasswordStrength() {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[^\w\s]/.test(this.password);

    if (hasLetters && hasNumbers && hasSymbols && passwordLength >= 8) {
      this.passwordStrength = 'strong';
    } else if (
      passwordLength >= 8 &&
      ((hasLetters && !hasNumbers && hasSymbols) ||
        (hasLetters && hasNumbers && !hasSymbols) ||
        (!hasLetters && hasNumbers && hasSymbols))
    ) {
      this.passwordStrength = 'medium';
    } else if (passwordLength < 8 || hasNumbers || hasLetters || hasSymbols) {
      this.passwordStrength = 'weak';
    } else {
      this.passwordStrength = '';
    }
  }
}

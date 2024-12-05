import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor() {}

  login(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      // Lógica de autenticación
    }
  }
}


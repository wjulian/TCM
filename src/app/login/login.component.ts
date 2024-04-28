import { users } from './../mocks/users-mock';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TokenSession, User } from '../models/user.interface';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;
  autorized: boolean | null = null;
  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  REQUIRED_EMAIL_MESSAGE = 'El correo electrónico es obligatorio';
  INVALID_EMAIL_MESSAGE = 'Correo electrónico inválido';
  REQUIRED_PASSWORD_MESSAGE = 'La contraseña es obligatoria';
  NOT_AUTORIZED_MESSAGE =
    'El usuario no existe o las credenciales son incorrectas';

  constructor(private router: Router) {}

  get loginFormControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const email = this.loginFormControls.email.value;
    const pass = this.loginFormControls.password.value;
    if (email && pass) {
      const validationUser = this.validateUser(email, pass);
      if (validationUser) {
        const expirationTime = new Date().setHours(24);
        const tokenSession : TokenSession = { ...validationUser, expiration: expirationTime}
        localStorage.setItem('token', JSON.stringify(tokenSession));
        this.autorized = true;
        this.router.navigateByUrl('/home');
      } else {
        this.autorized = false;
      }
    }
  }

  validateUser(email: string, password: string): User | null {
    const user = users.find((u) => u.email === email);
    if (user) {
      user.password === password;
      return user;
    } else {
      return null;
    }
  }
}

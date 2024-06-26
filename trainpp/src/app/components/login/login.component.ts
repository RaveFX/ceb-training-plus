import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      (response) => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          sessionStorage.setItem('name', response[0].fullName);
          sessionStorage.setItem('role', response[0].role);
          sessionStorage.setItem('id', response[0].id);
          sessionStorage.setItem('proPic', response[0].proPic);
          if(response[0].role === 'DGM'){
            this.router.navigate(['/dgm']);
          }else if (response[0].role === 'TO'){
            this.router.navigate(['/to']);
          }
        } else {
          this.msgService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'email or password is wrong',
          });
        }
      },
      (error) => {
        this.msgService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'something went wrong',
        });
      }
    );
  }
}

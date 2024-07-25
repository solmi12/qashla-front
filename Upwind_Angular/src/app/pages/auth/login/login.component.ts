import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthResponse } from 'src/app/models/AuthResponse';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(JwtHelperService) private jwtHelper: JwtHelperService,
    @Inject(Router) private route: Router,
    @Inject(AuthServiceService) private loginService: AuthServiceService,
    @Inject(ToastrService) private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      this.loginService.login(email, password).subscribe(
        (response: AuthResponse) => {
          const token = response.token;
          const userId = response.userId;
          const decodedToken = this.jwtHelper.decodeToken(token);
          this.loginService.updateAuthState(true, decodedToken.role, decodedToken.sub);
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId.toString());

          // Navigate based on the user's role
          if (decodedToken.role === 'ADMIN') {
            this.route.navigate(['']);
          }
          // else if (decodedToken.role === 'ADMIN') {
            //this.route.navigate(["/dashboard"]);
          //} else if (decodedToken.role === 'FORMATEUR') {
            //this.route.navigate(["/Dashboard-formateur"]);
          //}
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.toastr.error('Invalid credentials. Please check your email and password.');
          } else if (error.status === 409) {
            this.toastr.error('Account already exists.');
          } else {
            this.toastr.error('An unknown error occurred. Please try again later.');
          }
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {    
    if(this.authService.isAuthenticated()){
        this.router.navigate(['dashboard'])      
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.isSubmitting = true;
    if(this.loginForm.valid){
      this.isSubmitting = false;
      if(this.loginForm.get('email').value == 'ajay.patidar@lemosys.com' && this.loginForm.get('password').value=='123456'){
        localStorage.setItem('is_logged_in', 1);
        alert('Success.');
        this.router.navigate(['dashboard']);
      }else{
        alert('Invalid login detail.');
      }
    }
  }

}
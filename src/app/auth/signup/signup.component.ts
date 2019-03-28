import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './../../password-validation';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  is_logged_in = false; 
  signupForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {
    this.is_logged_in = localStorage.getItem('is_logged_in');
    if(this.is_logged_in==1){
        this.router.navigate(['dashboard'])      
    }
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
        username: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    });
  }

  onSubmit(): void {
    this.isSubmitting = true;
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
      this.authService.register(this.signupForm.value);
      //this.isSubmitting = false;
    }
  }

}
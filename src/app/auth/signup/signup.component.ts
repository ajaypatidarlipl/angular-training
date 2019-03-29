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
  signupForm: FormGroup;
  isSubmitting = false;
  signupResponse;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    if(this.authService.isAuthenticated()){
        this.router.navigate(['dashboard'])      
    }
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
        name: ['', [Validators.required]],
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
        this.authService.register(this.signupForm.value).subscribe(
          data  => {
            this.isSubmitting = false;
            alert(data.message);
            if(data.status==true){
              this.router.navigate(['dashboard']);
            }else{
              this.signupForm.get('password').setValue('');
              this.signupForm.get('confirm_password').setValue('');
            }
          },
          error  => {
            this.isSubmitting = false;
            console.log("Rrror", error);
          });
    }
  }

}
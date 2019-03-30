import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MessageService } from './../../messages/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;
  loginResponse;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private messageService: MessageService) {    
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
      this.authService.login(this.loginForm.value).subscribe(
        data  => {
          this.isSubmitting = false;
          this.messageService.add(data.message, data.status?'success':'danger');
          if(data.status==true){
              this.router.navigate(['dashboard']);
          }else{
            this.loginForm.get('password').setValue('');
          }
        },
        error  => {
          this.isSubmitting = false;
          console.log("Error: ", error);
        });     
    }
  }

}
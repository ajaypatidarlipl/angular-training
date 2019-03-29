import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(signupData){
    var data = {
      method: 'registration',
      data: [{
        username: signupData.username,
        email: signupData.email,
        password: signupData.password
      }]
    };
    
    return this.http.post("https://angular.cppatidar.com/angular/webservice/webservice.php", data).subscribe(

        data  => {

        console.log("POST Request is successful ", data);

        },

        error  => {

        console.log("Error", error);

        });
  }

}
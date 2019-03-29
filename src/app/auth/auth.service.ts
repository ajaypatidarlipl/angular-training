import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private webservice_url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    var is_logged_in = parseInt(localStorage.getItem('is_logged_in'));
    return is_logged_in ? true : false;
  }

  register(signupData){
    var data = {
      method: 'registration',
      data: JSON.stringify([{
        username: signupData.username,
        email: signupData.email,
        password: signupData.password
      }])
    };
    console.log('register', data)
    console.log('webservice_url', this.webservice_url)
    return this.http.post<any>(this.webservice_url, data).subscribe(

      data  => {

      console.log("PUT Request is successful ", data);

      },

      error  => {

      console.log("Rrror", error);

      });
  }

  login(loginData){
    if(loginData.email == 'ajay.patidar@lemosys.com' && loginData.password=='123456'){
      localStorage.setItem('is_logged_in', 1);
      return true;
    }
    return false;
    var data = {
      method: 'login',
      data: JSON.stringify([{
        email: loginData.email,
        password: loginData.password
      }])
    };
    console.log('login', data)
    console.log('webservice_url', this.webservice_url)
    return this.http.post<any>(this.webservice_url, data).subscribe(

      data  => {

        console.log("PUT Request is successful ", data);

      },

      error  => {

        console.log("Rrror", error);

      });
    
  }

}
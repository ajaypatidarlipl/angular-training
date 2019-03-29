import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  register(signupData): Observable<any>{
    var data = new HttpParams();
    data = data.set('method', 'registration');
    data = data.set('data', JSON.stringify([{
      'username': signupData.username,
      'email': signupData.email,
      'password': signupData.password
    }]));
    return this.http.post<any>(this.webservice_url, data)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  login(loginData){
    var data = new HttpParams();
    data = data.set('method', 'login');
    data = data.set('data', JSON.stringify([{
      'email': loginData.email,
      'password': loginData.password
    }]));
    return this.http.post<any>(this.webservice_url, data)
      .pipe(
        map(response => {
          localStorage.setItem('is_logged_in', 1);
          return response;
        })
      );
  }

  logout(){
    localStorage.setItem('is_logged_in', '');
    return true;
  }
}
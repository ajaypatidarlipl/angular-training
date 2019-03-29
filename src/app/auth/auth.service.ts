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

  register(signupData): Observable<any> {
    var data = {
      method: 'registration',
      data: [{
        username: signupData.username,
        email: signupData.email,
        password: signupData.password
      }]
    };

    return this.http.post<any>(this.webservice_url, data)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

}
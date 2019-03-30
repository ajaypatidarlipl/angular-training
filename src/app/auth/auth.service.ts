import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private webservice_url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    var is_logged_in = parseInt(localStorage.getItem('is_logged_in'));
    return is_logged_in ? true : false;
  }

  register(signupData): Observable<any>{
    var data = new HttpParams()
      .set('method', 'registration')
      .set('data', JSON.stringify([{
        'username': signupData.name,
        'email': signupData.email,
        'password': signupData.password
      }]));
    return this.http.post<any>(this.webservice_url, data)
      .pipe(
        retry(1),
        catchError(this.handleError),
        map(response => {
          return response;
        })
      );
  }

  login(loginData){
    var data = new HttpParams()
      .set('method', 'login')
      .set('data', JSON.stringify([{
        email: loginData.email,
        password: loginData.password
      }]));
    return this.http.post<any>(this.webservice_url, data)
      .pipe(        
        retry(1),
        catchError(this.handleError),
        map(response => {
          if(response.status==true)
            localStorage.setItem('is_logged_in', 1);
            
          return response;
        })
      );
  }

  logout(){
    localStorage.setItem('is_logged_in', '');
    return true;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
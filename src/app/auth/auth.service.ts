import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(signupData) {
    this.http.get('http://codingserver.com/faruqislamiccenter.com/webservice/registration.php')
      .subscribe(signupData);
  }

}
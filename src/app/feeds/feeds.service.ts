import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class FeedsService {

  private webservice_url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

  constructor(private http: HttpClient) { }

  getFeeds(): Observable<any>{
    var data = new HttpParams()
      .set('method', 'getFeeds');
    return this.http.post<any>(this.webservice_url, data)
      .pipe(
        retry(1),
        catchError(this.handleError),
        map(response => {
          return response;
        })
      );
  }

  getFeedBySlug(slug): Observable<any>{
    var data = new HttpParams()
      .set('method', 'getFeedBySlug')
      .set('data', JSON.stringify([{
        slug: slug
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
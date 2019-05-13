import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export abstract class RestService {
  protected baseUrl = "http://localhost:8080/kwetter/api";

  constructor(private httpClient: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  protected get(relativeUrl: string): Observable<any> {
    return this.httpClient
      .get(this.baseUrl + relativeUrl, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  protected post(relativeUrl: string, data: any, headers?: any): Observable<any> {
    let combinedHeaders = this.httpOptions;
    if (headers) {
      combinedHeaders = {...this.httpOptions, ...{ headers: new HttpHeaders(headers)}};
    }
    return this.httpClient
      .post(this.baseUrl + relativeUrl, JSON.stringify(data), combinedHeaders)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  protected put(relativeUrl: string, data: any): Observable<any> {
    return this.httpClient
      .put(this.baseUrl + relativeUrl, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    console.log(error);
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ContactFormSubmission } from '../../models/contact-form-submission';
import { MessageService } from '../message-service/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ContactFormService {

  private contactFormSubmissionUrl = 'https://foh-email-dispatch.herokuapp.com/api/send';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addContactFormSubmission (contactFormSubmission: ContactFormSubmission): Observable<ContactFormSubmission> {
    return this.http.post<ContactFormSubmission>(this.contactFormSubmissionUrl, contactFormSubmission, httpOptions).pipe(
      tap((contactFormSubmission: ContactFormSubmission) => this.log(`added Contact Form Submission`)),
      catchError(this.handleError<ContactFormSubmission>('addContactFormSubmission'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ContactFormService: ${message}`);
  }
}

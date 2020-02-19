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

  private contactFormSubmissionUrl = 'api/contactFormSubmissions';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getContactFormSubmissions(): Observable<ContactFormSubmission[]> {
    return this.http.get<ContactFormSubmission[]>(this.contactFormSubmissionUrl)
      .pipe(
        tap(ContactFormSubmissions => this.log('fetched contact form submissions')),
        catchError(this.handleError('getContactFormSubmissions', []))
      );
  }

  // /** GET hero by id. Return `undefined` when id not found */
  // getContactFormSubmissionNo404<Data>(id: number): Observable<ContactFormSubmission> {
  //   const url = `${this.contactFormSubmissionUrl}/?id=${id}`;
  //   return this.http.get<ContactFormSubmission[]>(url)
  //     .pipe(
  //       map(ContactFormSubmissions => ContactFormSubmissions[0]), // returns a {0|1} element array
  //       tap(c => {
  //         const outcome = c ? `fetched` : `did not find`;
  //         this.log(`${outcome} Contact Form Submission id=${id}`);
  //       }),
  //       catchError(this.handleError<ContactFormSubmission>(`getContactFormSubmission id=${id}`))
  //     );
  // }

  // /** GET hero by id. Will 404 if id not found */
  // getContactFormSubmission(id: number): Observable<ContactFormSubmission> {
  //   const url = `${this.contactFormSubmissionUrl}/${id}`;
  //   return this.http.get<ContactFormSubmission>(url).pipe(
  //     tap(_ => this.log(`fetched Contact Form Submission id=${id}`)),
  //     catchError(this.handleError<ContactFormSubmission>(`getContactFormSubmission id=${id}`))
  //   );
  // }

  // /* GET heroes whose name contains search term */
  // searchContactFormSubmissions(term: string): Observable<ContactFormSubmission[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<ContactFormSubmission[]>(
  //     `${this.contactFormSubmissionUrl}/?name=${term}`).pipe(
  //       tap(_ => this.log(`found Contact Form Submissions matching "${term}"`)),
  //       catchError(this.handleError<ContactFormSubmission[]>('searchContactFormSubmissions', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addContactFormSubmission (contactFormSubmission: ContactFormSubmission): Observable<ContactFormSubmission> {
    return this.http.post<ContactFormSubmission>(this.contactFormSubmissionUrl, contactFormSubmission, httpOptions).pipe(
      tap((contactFormSubmission: ContactFormSubmission) => this.log(`added Contact Form Submission w/ id=${contactFormSubmission.id}`)),
      catchError(this.handleError<ContactFormSubmission>('addContactFormSubmission'))
    );
  }

  // /** DELETE: delete the hero from the server */
  // deleteContactFormSubmission (contactFormSubmission: ContactFormSubmission | number): Observable<ContactFormSubmission> {
  //   const id = typeof contactFormSubmission === 'number' ? contactFormSubmission : contactFormSubmission.id;
  //   const url = `${this.contactFormSubmissionUrl}/${id}`;

  //   return this.http.delete<ContactFormSubmission>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted Contact Form Submission id=${id}`)),
  //     catchError(this.handleError<ContactFormSubmission>('deleteContactFormSubmission'))
  //   );
  // }

  /** PUT: update the submission on the server */
  updateContactFormSubmission (contactFormSubmission: ContactFormSubmission): Observable<any> {
    return this.http.put(this.contactFormSubmissionUrl, contactFormSubmission, httpOptions).pipe(
      tap(_ => this.log(`updated submission id=${contactFormSubmission.id}`)),
      catchError(this.handleError<any>('updateContactFormSubmission'))
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

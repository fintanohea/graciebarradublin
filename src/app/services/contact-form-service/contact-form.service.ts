import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AppConstants } from '../../constants/constants'
import { ContactFormSubmission } from '../../models/contact-form-submission';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ContactFormService {

  private contactFormSubmissionUrl = AppConstants.EMAIL_DISPATCH_SEND;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService  
  ) {}

  /** POST: submit contact form to email-dispatch service */
  addContactFormSubmission (contactFormSubmission: ContactFormSubmission): Observable<ContactFormSubmission> {
    const http$ = this.http.post<ContactFormSubmission>(
                    this.contactFormSubmissionUrl, 
                    contactFormSubmission, 
                    httpOptions
                  );
                  
    return http$.pipe(
      tap(_ => { 
        console.log(`Sent email: "${contactFormSubmission.content}"`);
        this.showToastrSuccess('Form Submitted'); 
      }),
      catchError(err => {
          this.showToastrError(err.statusText);
          return throwError(err);
      })
    );     
  }

  showToastrError(err: any) {
    this.toastr.error(err);
  }

  showToastrSuccess(message: any ) {
    this.toastr.success(message);
  }
}

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
  addContactFormSubmission (contactFormSubmission: ContactFormSubmission): Observable<any> {
    const http$ = this.http.post<any>(
                    this.contactFormSubmissionUrl, 
                    contactFormSubmission, 
                    httpOptions
                  );
                  
    return http$.pipe(
      tap(res => {
        res.confirmation === 'fail' ? 
          this.showToastrError(res.message.message) : 
          this.showToastrSuccess(res.message);
      }),
      catchError(err => {
        if(err.error.errors) {
          err.error.errors.forEach(e => {
            this.showToastrError(e.msg);
          });
        }
        err.statusText ? this.showToastrError(err.statusText) : this.showToastrError('Unknown Error');
        
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

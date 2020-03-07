import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppConstants } from '../constants/constants';
import { ContactFormSubmission } from '../models/contact-form-submission';
import { ContactFormService }  from '../services/contact-form-service/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactFormSubmission: ContactFormSubmission;
  name: string;
  email: string;
  message: string;
  noname: boolean;
  noemail: boolean;
  nomessage: boolean;
  submittingForm: boolean = false;

  constructor(
    private contactFormService: ContactFormService,
  ) {}

  ngOnInit() {
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    this.noname = this.name ? false : true;
    this.noemail = this.email ? false : true;
    this.nomessage = this.message ? false : true;

    if (this.name && this.email && this.message) {
      this.submittingForm = true;

      this.contactFormSubmission = {
        recipients: AppConstants.CONTACT_EMAIL, 
        subject: 'Gracie Barra Dublin form submission: ' + this.name, 
        content: 'Name: ' + this.name + '<br>' + 
                 'Email: ' + this.email + '<br>' + 
                 'Message: ' + this.message, 
        html: 'Name: ' + this.name + '<br>' + 
              'Email: ' + this.email + '<br>' + 
              'Message: ' + this.message
      };

      this.contactFormService.addContactFormSubmission(this.contactFormSubmission)
      .pipe(
        catchError( err => of(err) )
      )
      .subscribe(
        res => console.log('HTTP Response', res),
        err => console.log('HTTP Error', err),
        () => this.submittingForm = false
      );
    }
  }
}

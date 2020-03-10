import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

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
  processForm(form: NgForm) {
    if (form.value.name && form.value.email && form.value.message) {
      this.submittingForm = true;
      this.contactFormSubmission = {
        recipients: AppConstants.CONTACT_EMAIL, 
        subject: 'Gracie Barra Dublin form submission: ' + form.value.name, 
        content: 'Name: ' + form.value.name + '<br>' + 
                  'Email: ' + form.value.email + '<br>' + 
                  'Message: ' + form.value.message, 
        html: 'Name: ' + form.value.name + '<br>' + 
              'Email: ' + form.value.email + '<br>' + 
              'Message: ' + form.value.message
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

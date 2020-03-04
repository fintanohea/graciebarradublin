import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { ContactFormSubmission } from '../models/contact-form-submission';
import { ContactFormService }  from '../services/contact-form-service/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contactFormSubmission: ContactFormSubmission;
  cofirmationOfFormSubmission: ContactFormSubmission;

  name: string;
  email: string;
  message: string;
  noname: boolean;
  noemail: boolean;
  nomessage: boolean;

  constructor(
    private route: ActivatedRoute,
    private contactFormService: ContactFormService,
    private location: Location,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.getcontactFormSubmission();
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
      this.contactFormSubmission = {
        recipients: 'fintanohea@gmail.com', 
        subject: 'Gracie Barra Dublin form submission: ' + this.name, 
        content: 'Name: ' + this.name + '<br>' + 
                 'Email: ' + this.email + '<br>' + 
                 'Message: ' + this.message, 
        html: 'Name: ' + this.name + '<br>' + 
              'Email: ' + this.email + '<br>' + 
              'Message: ' + this.message
      };

      this.cofirmationOfFormSubmission = {
        recipients: this.email, 
        subject: 'Thank you for contacting Gracie Barra Dublin', 
        content: 'We will get back to you as soon as possible', 
        html: 'We will get back to you as soon as possible'
      }

      this.showSuccess();
      // this.contactFormService.addContactFormSubmission(this.contactFormSubmission)
      //   .subscribe(() => this.showSuccess());
    }
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    debugger;

  }


}

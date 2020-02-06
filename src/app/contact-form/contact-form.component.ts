import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ContactFormSubmission } from '../modals/contact-form-submission';
import { ContactFormService }  from '../services/contact-form-service/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contactFormSubmission: ContactFormSubmission;
  contactFormSubmissions: ContactFormSubmission[];

  name: string;
  email: string;
  message: string;
  noname: boolean;
  noemail: boolean;
  nomessage: boolean;

  constructor(
    private route: ActivatedRoute,
    private contactFormService: ContactFormService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getcontactFormSubmission();
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
      this.contactFormSubmission = {id: this.getRandomNumber(), name: this.name, email: this.email, message: this.message};
    
      this.contactFormService.updateContactFormSubmission(this.contactFormSubmission)
        .subscribe(() => this.getcontactFormSubmission());
    }
  }

  getRandomNumber(): number {
    return Math.floor( (Math.random() * 10) * (Math.random() * 10) );
  }

  getcontactFormSubmission(): void {
    this.contactFormService.getContactFormSubmissions()
    .subscribe(contactFormSubmissions => this.contactFormSubmissions = contactFormSubmissions);
  }

}

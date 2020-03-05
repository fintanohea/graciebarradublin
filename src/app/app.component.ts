import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {
  title = 'Gracie Barra Dublin';
  private apiUrl = 'https://foh-email-dispatch.herokuapp.com/api/send'
  data: any = {
    "recipients":"fintanohea@gmail.com",
    "subject":"sent from gb app live",
    "content":"asdasd",
    "html":"asdasd"
  };

  constructor(private http: HttpClient) {
    // this.sendData();
  }

  sendData() {
    return this.http.post<any>(this.apiUrl, this.data)
      .subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );
  }
}



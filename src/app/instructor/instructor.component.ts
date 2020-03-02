import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../constants/constants';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  cloudshare = AppConstants.CLOUDSHARE_ENDPOINT;

  constructor() { }

  ngOnInit() {
  }

}

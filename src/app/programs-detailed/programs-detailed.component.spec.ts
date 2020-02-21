import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsDetailedComponent } from './programs-detailed.component';

describe('ProgramsDetailedComponent', () => {
  let component: ProgramsDetailedComponent;
  let fixture: ComponentFixture<ProgramsDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

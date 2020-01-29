import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcasesComponent } from './ngcases.component';

describe('NgcasesComponent', () => {
  let component: NgcasesComponent;
  let fixture: ComponentFixture<NgcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

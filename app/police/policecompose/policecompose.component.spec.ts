import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicecomposeComponent } from './policecompose.component';

describe('PolicecomposeComponent', () => {
  let component: PolicecomposeComponent;
  let fixture: ComponentFixture<PolicecomposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicecomposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicecomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoinboxComponent } from './ngoinbox.component';

describe('NgoinboxComponent', () => {
  let component: NgoinboxComponent;
  let fixture: ComponentFixture<NgoinboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoinboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

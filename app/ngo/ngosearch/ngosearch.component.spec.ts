import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosearchComponent } from './ngosearch.component';

describe('NgosearchComponent', () => {
  let component: NgosearchComponent;
  let fixture: ComponentFixture<NgosearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgosearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

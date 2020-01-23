import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoshowusersComponent } from './ngoshowusers.component';

describe('NgoshowusersComponent', () => {
  let component: NgoshowusersComponent;
  let fixture: ComponentFixture<NgoshowusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoshowusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoshowusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

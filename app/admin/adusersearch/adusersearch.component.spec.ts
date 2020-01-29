import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdusersearchComponent } from './adusersearch.component';

describe('AdusersearchComponent', () => {
  let component: AdusersearchComponent;
  let fixture: ComponentFixture<AdusersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdusersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdusersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgocomposeComponent } from './ngocompose.component';

describe('NgocomposeComponent', () => {
  let component: NgocomposeComponent;
  let fixture: ComponentFixture<NgocomposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgocomposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgocomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

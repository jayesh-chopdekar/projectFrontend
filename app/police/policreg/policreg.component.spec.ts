import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicregComponent } from './policreg.component';

describe('PolicregComponent', () => {
  let component: PolicregComponent;
  let fixture: ComponentFixture<PolicregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

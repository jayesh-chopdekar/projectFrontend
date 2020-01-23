import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceinboxComponent } from './policeinbox.component';

describe('PoliceinboxComponent', () => {
  let component: PoliceinboxComponent;
  let fixture: ComponentFixture<PoliceinboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceinboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

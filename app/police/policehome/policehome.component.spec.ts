import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicehomeComponent } from './policehome.component';

describe('PolicehomeComponent', () => {
  let component: PolicehomeComponent;
  let fixture: ComponentFixture<PolicehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

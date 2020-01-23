import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcaseComponent } from './regcase.component';

describe('RegcaseComponent', () => {
  let component: RegcaseComponent;
  let fixture: ComponentFixture<RegcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

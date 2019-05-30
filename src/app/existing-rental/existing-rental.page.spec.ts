import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingRentalPage } from './existing-rental.page';

describe('ExistingRentalPage', () => {
  let component: ExistingRentalPage;
  let fixture: ComponentFixture<ExistingRentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingRentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingRentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitDetailPage } from './permit-detail.page';

describe('PermitDetailPage', () => {
  let component: PermitDetailPage;
  let fixture: ComponentFixture<PermitDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

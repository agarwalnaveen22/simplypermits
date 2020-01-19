import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePicPage } from './single-pic.page';

describe('SinglePicPage', () => {
  let component: SinglePicPage;
  let fixture: ComponentFixture<SinglePicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

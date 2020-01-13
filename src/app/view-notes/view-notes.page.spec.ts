import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotesPage } from './view-notes.page';

describe('ViewNotesPage', () => {
  let component: ViewNotesPage;
  let fixture: ComponentFixture<ViewNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByVehiclePage } from './search-by-vehicle.page';

describe('SearchByVehiclePage', () => {
  let component: SearchByVehiclePage;
  let fixture: ComponentFixture<SearchByVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByVehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

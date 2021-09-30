import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectAutocompleteComponent } from './multiselect-autocomplete.component';

describe('MultiselectAutocompleteComponent', () => {
  let component: MultiselectAutocompleteComponent;
  let fixture: ComponentFixture<MultiselectAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

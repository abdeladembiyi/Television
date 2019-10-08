import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReglecmsComponent } from './add-reglecms.component';

describe('AddReglecmsComponent', () => {
  let component: AddReglecmsComponent;
  let fixture: ComponentFixture<AddReglecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReglecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReglecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

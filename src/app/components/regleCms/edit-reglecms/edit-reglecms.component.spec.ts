import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReglecmsComponent } from './edit-reglecms.component';

describe('EditReglecmsComponent', () => {
  let component: EditReglecmsComponent;
  let fixture: ComponentFixture<EditReglecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReglecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReglecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

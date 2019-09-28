import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegleComponent } from './edit-regle.component';

describe('EditRegleComponent', () => {
  let component: EditRegleComponent;
  let fixture: ComponentFixture<EditRegleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRegleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

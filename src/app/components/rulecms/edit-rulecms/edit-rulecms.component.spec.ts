import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRulecmsComponent } from './edit-rulecms.component';

describe('EditRulecmsComponent', () => {
  let component: EditRulecmsComponent;
  let fixture: ComponentFixture<EditRulecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRulecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRulecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

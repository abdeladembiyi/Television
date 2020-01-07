import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRulecmsComponent } from './add-rulecms.component';

describe('AddRulecmsComponent', () => {
  let component: AddRulecmsComponent;
  let fixture: ComponentFixture<AddRulecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRulecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRulecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

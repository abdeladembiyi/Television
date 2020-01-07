import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulecmsComponent } from './rulecms.component';

describe('RulecmsComponent', () => {
  let component: RulecmsComponent;
  let fixture: ComponentFixture<RulecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

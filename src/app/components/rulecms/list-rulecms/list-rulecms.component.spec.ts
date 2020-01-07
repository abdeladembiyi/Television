import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRulecmsComponent } from './list-rulecms.component';

describe('ListRulecmsComponent', () => {
  let component: ListRulecmsComponent;
  let fixture: ComponentFixture<ListRulecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRulecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRulecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

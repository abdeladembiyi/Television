import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReglecmsComponent } from './list-reglecms.component';

describe('ListReglecmsComponent', () => {
  let component: ListReglecmsComponent;
  let fixture: ComponentFixture<ListReglecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReglecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReglecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

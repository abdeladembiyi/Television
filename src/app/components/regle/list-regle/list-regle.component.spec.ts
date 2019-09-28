import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegleComponent } from './list-regle.component';

describe('ListRegleComponent', () => {
  let component: ListRegleComponent;
  let fixture: ComponentFixture<ListRegleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

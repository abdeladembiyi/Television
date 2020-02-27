import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeletestComponent } from './teletest.component';

describe('TeletestComponent', () => {
  let component: TeletestComponent;
  let fixture: ComponentFixture<TeletestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeletestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

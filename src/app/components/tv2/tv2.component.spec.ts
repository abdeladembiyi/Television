import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tv2Component } from './tv2.component';

describe('Tv2Component', () => {
  let component: Tv2Component;
  let fixture: ComponentFixture<Tv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

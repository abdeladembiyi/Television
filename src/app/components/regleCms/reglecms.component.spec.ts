import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglecmsComponent } from './reglecms.component';

describe('ReglecmsComponent', () => {
  let component: ReglecmsComponent;
  let fixture: ComponentFixture<ReglecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

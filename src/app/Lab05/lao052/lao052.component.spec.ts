import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lao052Component } from './lab52.component';

describe('Lao052Component', () => {
  let component: Lao052Component;
  let fixture: ComponentFixture<Lao052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lao052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lao052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

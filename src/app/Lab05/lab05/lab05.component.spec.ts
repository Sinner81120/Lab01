import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab05Component } from './lab05.component';

describe('Lab05Component', () => {
  let component: Lab05Component;
  let fixture: ComponentFixture<Lab05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

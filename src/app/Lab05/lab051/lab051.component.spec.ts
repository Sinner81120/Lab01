import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab051Component } from './lab051.component';

describe('Lab051Component', () => {
  let component: Lab051Component;
  let fixture: ComponentFixture<Lab051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab053Component } from './lab053.component';

describe('Lab053Component', () => {
  let component: Lab053Component;
  let fixture: ComponentFixture<Lab053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

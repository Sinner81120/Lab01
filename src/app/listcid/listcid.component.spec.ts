import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcidComponent } from './listcid.component';

describe('ListcidComponent', () => {
  let component: ListcidComponent;
  let fixture: ComponentFixture<ListcidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

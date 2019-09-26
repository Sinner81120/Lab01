import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaodienComponent } from './giaodien.component';

describe('GiaodienComponent', () => {
  let component: GiaodienComponent;
  let fixture: ComponentFixture<GiaodienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaodienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaodienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

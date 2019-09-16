import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsinhvienComponent } from './detailsinhvien.component';

describe('DetailsinhvienComponent', () => {
  let component: DetailsinhvienComponent;
  let fixture: ComponentFixture<DetailsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

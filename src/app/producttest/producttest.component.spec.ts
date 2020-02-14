import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttestComponent } from './producttest.component';

describe('ProducttestComponent', () => {
  let component: ProducttestComponent;
  let fixture: ComponentFixture<ProducttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

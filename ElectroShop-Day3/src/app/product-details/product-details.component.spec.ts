import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetails } from './product-details.component';

describe('ProductDetails', () => {
  let component: ProductDetails;
  let fixture: ComponentFixture<ProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetails);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('ProductName', 'Laptop');
    fixture.componentRef.setInput('Description', 'Dell Laptop');
    fixture.componentRef.setInput('Price', 850);
    fixture.componentRef.setInput('IsAvailable', true);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

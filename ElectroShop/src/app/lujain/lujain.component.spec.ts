import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lujain } from './lujain.component';

describe('Lujain', () => {
  let component: Lujain;
  let fixture: ComponentFixture<Lujain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lujain],
    }).compileComponents();

    fixture = TestBed.createComponent(Lujain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

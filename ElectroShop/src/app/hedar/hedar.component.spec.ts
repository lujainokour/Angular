import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hedar } from './hedar.component';

describe('Hedar', () => {
  let component: Hedar;
  let fixture: ComponentFixture<Hedar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hedar],
    }).compileComponents();

    fixture = TestBed.createComponent(Hedar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSignals } from './basket-signals';

describe('BasketSignals', () => {
  let component: BasketSignals;
  let fixture: ComponentFixture<BasketSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

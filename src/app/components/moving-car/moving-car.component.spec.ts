import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCarComponent } from './moving-car.component';

describe('MovingCarComponent', () => {
  let component: MovingCarComponent;
  let fixture: ComponentFixture<MovingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

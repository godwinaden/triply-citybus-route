import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HartbergPopulationComponent } from './hartberg-population.component';

describe('HartbergPopulationComponent', () => {
  let component: HartbergPopulationComponent;
  let fixture: ComponentFixture<HartbergPopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HartbergPopulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HartbergPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

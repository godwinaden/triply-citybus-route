import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchmentAreaPopulationComponent } from './catchment-area-population.component';

describe('CatchmentAreaPopulationComponent', () => {
  let component: CatchmentAreaPopulationComponent;
  let fixture: ComponentFixture<CatchmentAreaPopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchmentAreaPopulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchmentAreaPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

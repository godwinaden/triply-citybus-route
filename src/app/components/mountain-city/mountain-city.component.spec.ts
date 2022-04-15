import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainCityComponent } from './mountain-city.component';

describe('MountainCityComponent', () => {
  let component: MountainCityComponent;
  let fixture: ComponentFixture<MountainCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

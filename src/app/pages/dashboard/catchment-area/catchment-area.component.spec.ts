import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchmentAreaComponent } from './catchment-area.component';

describe('CatchmentAreaComponent', () => {
  let component: CatchmentAreaComponent;
  let fixture: ComponentFixture<CatchmentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchmentAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchmentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

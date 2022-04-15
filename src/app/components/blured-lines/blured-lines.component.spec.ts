import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluredLinesComponent } from './blured-lines.component';

describe('BluredLinesComponent', () => {
  let component: BluredLinesComponent;
  let fixture: ComponentFixture<BluredLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluredLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluredLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

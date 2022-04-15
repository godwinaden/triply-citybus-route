import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAppThemeComponent } from './change-app-theme.component';

describe('ChangeAppThemeComponent', () => {
  let component: ChangeAppThemeComponent;
  let fixture: ComponentFixture<ChangeAppThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAppThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAppThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

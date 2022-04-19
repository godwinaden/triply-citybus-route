import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeThemeComponent } from './change-theme.component';
import {ChangeThemeService} from "../../globals";

describe('ChangeThemeComponent', () => {
  let component: ChangeThemeComponent;
  let fixture: ComponentFixture<ChangeThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeThemeComponent ],
      providers: [ChangeThemeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

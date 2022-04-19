import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesComponent } from './cookies.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

describe('CookiesComponent', () => {
  let component: CookiesComponent;
  let fixture: ComponentFixture<CookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

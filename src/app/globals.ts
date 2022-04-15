//
// ===== File globals.ts
//
'use strict';

import {EventEmitter} from "@angular/core";

export let globals:any = {
  styleTheme: 0,
};

export class ChangeThemeService{
  public theme$: EventEmitter<number> = new EventEmitter();

  public change(theme: number): void{
    this.theme$.emit(theme);
  }
}

export interface DialogData {
  title: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
}

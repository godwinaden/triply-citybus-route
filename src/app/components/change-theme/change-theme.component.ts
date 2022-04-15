import {Component, Input, OnInit} from '@angular/core';
import {ChangeThemeService, globals} from "../../globals";

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss']
})
export class ChangeThemeComponent implements OnInit {

  styleTheme: number = globals.styleTheme;

  constructor(private changeThemeService: ChangeThemeService) {

  }

  ngOnInit(): void {
  }

  changeTheme(isDarkBlue: boolean): void {
    let theme: number = isDarkBlue? 0 : 1;
    this.changeThemeService.change(theme);
    this.styleTheme = theme;
  }

}

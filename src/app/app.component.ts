import { Component } from '@angular/core';
import {ChangeThemeService, globals} from "./globals";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'triply-citybus-route';
  styleTheme:number = globals.styleTheme;
  windowScrolled: boolean | undefined;

  constructor(changeThemeService: ChangeThemeService){
    changeThemeService.theme$.subscribe(
      theme => this.styleTheme = theme,
    );
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      alert();
      this.windowScrolled = window.pageXOffset > 100 || document.body.scrollTop > 100;
    });
  }
}

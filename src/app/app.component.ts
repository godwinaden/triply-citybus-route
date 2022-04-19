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

  }

  onScrolled(element: any){
    let elementTarget = document.getElementById("app");
    this.windowScrolled = element.target.scrollTop > (elementTarget!.offsetTop + elementTarget!.offsetHeight);
  }
}

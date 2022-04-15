import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BluredLinesComponent} from "./blured-lines/blured-lines.component";
import {ChangeThemeComponent} from "./change-theme/change-theme.component";
import {CookiesComponent} from "./cookies/cookies.component";
import {LogoComponent} from "./logo/logo.component";
import {MountainCityComponent} from "./mountain-city/mountain-city.component";
import {MovingBackgroundComponent} from "./moving-background/moving-background.component";
import {MovingCirclesComponent} from "./moving-circles/moving-circles.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MovingCarComponent } from './moving-car/moving-car.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
// import {AngularFontAwesomeModule} from "angular-font-awesome";

@NgModule({
  declarations: [
    BluredLinesComponent,
    ChangeThemeComponent,
    CookiesComponent,
    LogoComponent,
    MountainCityComponent,
    MovingBackgroundComponent,
    MovingCirclesComponent,
    NavbarComponent,
    SidebarComponent,
    MovingCarComponent,
    ScrollUpComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    FlexLayoutModule,
    // AngularFontAwesomeModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    BluredLinesComponent,
    ChangeThemeComponent,
    CookiesComponent,
    LogoComponent,
    MountainCityComponent,
    MovingBackgroundComponent,
    MovingCirclesComponent,
    NavbarComponent,
    SidebarComponent,
    MovingCarComponent,
    ScrollUpComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }

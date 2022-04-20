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
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MovingCarComponent } from './moving-car/moving-car.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import {TransportModeService} from "../services/transport-mode/transport-mode.service";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {PopulationService} from "../services/population/population.service";

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
    FooterComponent,
    LeafletMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LeafletModule,
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
    FooterComponent,
    LeafletMapComponent
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    TransportModeService,
    PopulationService,
  ],
})
export class ComponentsModule { }

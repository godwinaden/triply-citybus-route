import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeAppThemeRoutingModule } from './change-app-theme-routing.module';
import { ChangeAppThemeComponent } from './change-app-theme.component';
import {ComponentsModule} from "../../../components/components.module";


@NgModule({
  declarations: [
    ChangeAppThemeComponent,
  ],
  imports: [
    CommonModule,
    ChangeAppThemeRoutingModule,
    ComponentsModule
  ],
  exports: [ChangeAppThemeComponent]
})
export class ChangeAppThemeModule { }

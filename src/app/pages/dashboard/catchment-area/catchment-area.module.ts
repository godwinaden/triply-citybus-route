import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchmentAreaRoutingModule } from './catchment-area-routing.module';
import { CatchmentAreaComponent } from './catchment-area.component';
import {ComponentsModule} from "../../../components/components.module";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [
    CatchmentAreaComponent
  ],
  imports: [
    CommonModule,
    CatchmentAreaRoutingModule,
    ComponentsModule,
    LeafletModule,
  ]
})
export class CatchmentAreaModule { }

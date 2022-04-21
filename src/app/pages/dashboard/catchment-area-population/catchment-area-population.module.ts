import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchmentAreaPopulationRoutingModule } from './catchment-area-population-routing.module';
import { CatchmentAreaPopulationComponent } from './catchment-area-population.component';
import {ComponentsModule} from "../../../components/components.module";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [
    CatchmentAreaPopulationComponent
  ],
  imports: [
    CommonModule,
    CatchmentAreaPopulationRoutingModule,
    ComponentsModule,
    LeafletModule,
  ]
})
export class CatchmentAreaPopulationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HartbergPopulationRoutingModule } from './hartberg-population-routing.module';
import { HartbergPopulationComponent } from './hartberg-population.component';
import {ComponentsModule} from "../../../components/components.module";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [
    HartbergPopulationComponent
  ],
  imports: [
    CommonModule,
    HartbergPopulationRoutingModule,
    ComponentsModule,
    LeafletModule,
  ]
})
export class HartbergPopulationModule { }

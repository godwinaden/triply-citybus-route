import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchmentAreaPopulationRoutingModule } from './catchment-area-population-routing.module';
import { CatchmentAreaPopulationComponent } from './catchment-area-population.component';


@NgModule({
  declarations: [
    CatchmentAreaPopulationComponent
  ],
  imports: [
    CommonModule,
    CatchmentAreaPopulationRoutingModule
  ]
})
export class CatchmentAreaPopulationModule { }

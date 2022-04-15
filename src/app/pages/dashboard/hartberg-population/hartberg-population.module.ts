import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HartbergPopulationRoutingModule } from './hartberg-population-routing.module';
import { HartbergPopulationComponent } from './hartberg-population.component';


@NgModule({
  declarations: [
    HartbergPopulationComponent
  ],
  imports: [
    CommonModule,
    HartbergPopulationRoutingModule
  ]
})
export class HartbergPopulationModule { }

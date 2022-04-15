import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchmentAreaRoutingModule } from './catchment-area-routing.module';
import { CatchmentAreaComponent } from './catchment-area.component';


@NgModule({
  declarations: [
    CatchmentAreaComponent
  ],
  imports: [
    CommonModule,
    CatchmentAreaRoutingModule
  ]
})
export class CatchmentAreaModule { }

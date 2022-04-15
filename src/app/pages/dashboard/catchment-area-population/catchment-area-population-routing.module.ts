import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchmentAreaPopulationComponent } from './catchment-area-population.component';

const routes: Routes = [{ path: '', component: CatchmentAreaPopulationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatchmentAreaPopulationRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HartbergPopulationComponent } from './hartberg-population.component';

const routes: Routes = [{ path: '', component: HartbergPopulationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HartbergPopulationRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchmentAreaComponent } from './catchment-area.component';

const routes: Routes = [{ path: '', component: CatchmentAreaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatchmentAreaRoutingModule { }

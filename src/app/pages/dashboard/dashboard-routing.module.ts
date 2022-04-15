import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {AdminInnerGuard} from "../../guards/admin-inner.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'catchment-area',
        loadChildren: () => import('./catchment-area/catchment-area.module')
          .then(m => m.CatchmentAreaModule)
      },
      { path: '', redirectTo: 'catchment-area', pathMatch: 'full'},
      {
        path: 'catchment-area-population',
        loadChildren: () => import('./catchment-area-population/catchment-area-population.module')
          .then(m => m.CatchmentAreaPopulationModule)
      },
      {
        path: 'hartberg-population',
        loadChildren: () => import('./hartberg-population/hartberg-population.module')
          .then(m => m.HartbergPopulationModule)
      }
    ]
  },
  { path: 'change-app-theme', loadChildren: () => import('./change-app-theme/change-app-theme.module').then(m => m.ChangeAppThemeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

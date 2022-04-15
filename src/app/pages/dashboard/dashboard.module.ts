import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {AdminInnerGuard} from "../../guards/admin-inner.guard";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ],
  providers: [AdminInnerGuard]
})
export class DashboardModule { }

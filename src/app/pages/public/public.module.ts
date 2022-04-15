import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import {HomeModule} from "./home/home.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {LoginModule} from "./login/login.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ComponentsModule} from "../../components/components.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    ComponentsModule,
    PageNotFoundModule,
    LoginModule,
    RouterModule,
    MatSidenavModule,
  ],
  exports: [
    PublicComponent,
  ],
})
export class PublicModule { }

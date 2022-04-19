import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatDialog} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ComponentsModule} from "../../../components/components.module";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    ComponentsModule,
    LeafletModule,
  ],
  providers: [MatDialog],
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AdminGuard} from "./guards/admin.guard";
import {AdminInnerGuard} from "./guards/admin-inner.guard";
import {ChangeThemeService} from "./globals";
import {PublicModule} from "./pages/public/public.module";
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {ComponentsModule} from "./components/components.module";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {TransportModeService} from "./services/transport-mode/transport-mode.service";
import {HttpClientModule} from "@angular/common/http";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LeafletModule,
    AppRoutingModule,
    PublicModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    DashboardModule,
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [AdminGuard, AdminInnerGuard, ChangeThemeService, TransportModeService],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

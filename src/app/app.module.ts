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
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PublicModule,
    MatButtonModule,
    MatIconModule,
    DashboardModule,
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [AdminGuard, AdminInnerGuard, ChangeThemeService],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

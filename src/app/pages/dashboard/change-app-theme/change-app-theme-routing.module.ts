import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeAppThemeComponent } from './change-app-theme.component';

const routes: Routes = [{ path: '', component: ChangeAppThemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeAppThemeRoutingModule { }

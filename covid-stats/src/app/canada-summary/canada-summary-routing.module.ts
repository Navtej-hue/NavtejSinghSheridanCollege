// src/app/canada-summary/canada-summary-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyUpdatesComponent } from './key-updates/key-updates.component';

const routes: Routes = [
  { path: '', component: KeyUpdatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanadaSummaryRoutingModule {}

// src/app/canada-summary/canada-summary.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { KeyUpdatesComponent } from './key-updates/key-updates.component';
import { CanadaSummaryRoutingModule } from './canada-summary-routing.module';

@NgModule({
  declarations: [KeyUpdatesComponent],
  imports: [
    CommonModule, 
    IonicModule,
    CanadaSummaryRoutingModule],
})
export class CanadaSummaryModule {}

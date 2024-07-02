// src/app/ontario/ontario.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OntarioStatusComponent } from './ontario-status/ontario-status.component';
import { MessageComponent } from './message/message.component';
import { DataListComponent } from './data-list/data-list.component';
import { OntarioRoutingModule } from './ontario-routing.module';

@NgModule({
  declarations: [
    OntarioStatusComponent,
    MessageComponent,
    DataListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    OntarioRoutingModule
  ]
})
export class OntarioModule { }

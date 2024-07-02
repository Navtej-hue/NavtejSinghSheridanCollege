// src/app/page/page.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OntarioStatusComponent } from './ontario-status/ontario-status.component';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    OntarioStatusComponent,
    DetailDataComponent,
    SendMessageComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PageRoutingModule
  ]
})
export class PageModule { }

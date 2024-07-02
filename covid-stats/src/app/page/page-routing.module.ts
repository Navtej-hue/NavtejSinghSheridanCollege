// src/app/page/page-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OntarioStatusComponent } from './ontario-status/ontario-status.component';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { BackButtonComponent } from './back-button/back-button.component';

const routes: Routes = [
  { path: 'status', component: OntarioStatusComponent },
  { path: 'detail-data', component: DetailDataComponent },
  { path: 'send-message', component: SendMessageComponent },
  { path: 'back-button', component: BackButtonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}

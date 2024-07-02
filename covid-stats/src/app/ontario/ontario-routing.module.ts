// src/app/ontario/ontario-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OntarioStatusComponent } from './ontario-status/ontario-status.component';
import { MessageComponent } from './message/message.component';
import { DataListComponent } from './data-list/data-list.component';

const routes: Routes = [
  { path: 'status', component: OntarioStatusComponent },
  { path: 'message', component: MessageComponent },
  { path: 'data-list', component: DataListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OntarioRoutingModule {}

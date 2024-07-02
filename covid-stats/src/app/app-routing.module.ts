// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'canada-summary', loadChildren: () => import('./canada-summary/canada-summary.module').then(m => m.CanadaSummaryModule) },
  { path: 'ontario', loadChildren: () => import('./ontario/ontario.module').then(m => m.OntarioModule) },
  { path: 'page', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },
  { path: '', redirectTo: '/canada-summary', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

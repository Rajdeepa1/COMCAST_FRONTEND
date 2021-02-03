import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunScriptsComponent } from './run-scripts/run-scripts.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

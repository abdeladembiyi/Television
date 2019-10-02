import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegleComponent } from './components/regle/regle.component';
import { TelevisionComponent } from './components/television/television.component';
import { AccidentComponent } from './components/accident/accident.component';


const routes: Routes = [
  { path: '', component: TelevisionComponent, pathMatch: 'full' },
  { path: 'admin', component: RegleComponent },
  { path: 'admin/regle', component: RegleComponent },
  { path: 'admin/accident', component: AccidentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegleComponent } from './components/regle/regle.component';
import { TelevisionComponent } from './components/television/television.component';
import { AccidentComponent } from './components/accident/accident.component';
import { MessageComponent } from './components/message/message.component';
import { AdminComponent } from './components/admin/admin.component';
import { TvComponent } from './components/tv/tv.component';
import { RulecmsComponent } from './components/rulecms/rulecms.component';
import { Tv2Component } from './components/tv2/tv2.component';
import { PointeuseComponent } from './components/pointeuse/pointeuse.component';
import { TeletestComponent } from './components/teletest/teletest.component';


const routes: Routes = [
  { path: '', component: TelevisionComponent, pathMatch: 'full' },
  { path: 'tv',component: TvComponent,pathMatch:'full'},
  { path: 'tv2',component: Tv2Component,pathMatch:'full'},
  { path: 'pointeuse',component: PointeuseComponent,pathMatch:'full'},
  {
    path: 'admin', component:AdminComponent, children:[
      { path: '',component:RegleComponent,outlet: 'admin'},
      { path: 'regles',component:RegleComponent,outlet:'admin'},
      { path: 'reglesCms',component:RulecmsComponent,outlet:'admin'},
      { path: 'accidents',component:AccidentComponent,outlet:'admin'},
      { path: 'messages',component:MessageComponent,outlet:'admin'}
    ]
  }
  // { path: 'admin', component: RegleComponent },
  // { path: 'admin/regle', component: RegleComponent },
  // { path: 'admin/accident', component: AccidentComponent },
  // { path: 'message', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkyconsModule } from 'ngx-skycons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelevisionComponent } from './components/television/television.component';
import { RegleComponent } from './components/regle/regle.component';
import { AddRegleComponent } from './components/regle/add-regle/add-regle.component';
import { EditRegleComponent } from './components/regle/edit-regle/edit-regle.component';
import { ListRegleComponent } from './components/regle/list-regle/list-regle.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccidentComponent } from './components/accident/accident.component';
import { NgMarqueeModule } from 'ng-marquee';
import { MessageComponent } from './components/message/message.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { TvComponent } from './components/tv/tv.component';
import { RulecmsComponent } from './components/rulecms/rulecms.component';
import { EditRulecmsComponent } from './components/rulecms/edit-rulecms/edit-rulecms.component';
import { AddRulecmsComponent } from './components/rulecms/add-rulecms/add-rulecms.component';
import { ListRulecmsComponent } from './components/rulecms/list-rulecms/list-rulecms.component';
import { Tv2Component } from './components/tv2/tv2.component';
import { PointeuseComponent } from './components/pointeuse/pointeuse.component';

@NgModule({
  declarations: [
    AppComponent,
    TelevisionComponent,
    RegleComponent,
    EditRegleComponent,
    AddRegleComponent,
    ListRegleComponent,
    AccidentComponent,
    MessageComponent,
    AdminComponent,
    NavbarComponent,
    TvComponent,
    RulecmsComponent,
    EditRulecmsComponent,
    AddRulecmsComponent,
    ListRulecmsComponent,
    Tv2Component,
    PointeuseComponent
  ],
  entryComponents:[
      AddRegleComponent,
      EditRegleComponent,
      AddRulecmsComponent,
      EditRulecmsComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    SkyconsModule,
    NgMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

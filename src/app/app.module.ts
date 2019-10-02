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

@NgModule({
  declarations: [
    AppComponent,
    TelevisionComponent,
    RegleComponent,
    EditRegleComponent,
    AddRegleComponent,
    ListRegleComponent,
    AccidentComponent
  ],
  entryComponents:[AddRegleComponent, EditRegleComponent],
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

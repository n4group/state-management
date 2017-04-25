import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter/counter.reducer';
import { countersReducer } from './counters/counters.reducer';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StateComponent } from './state/state.component';
import { CountersComponent } from './counters/counters.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    StateComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.provideStore({
      counter: counterReducer,
      counters: countersReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

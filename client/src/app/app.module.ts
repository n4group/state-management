import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter/counter.reducer';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StateComponent } from './state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.provideStore({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

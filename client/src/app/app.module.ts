import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    MaterialModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

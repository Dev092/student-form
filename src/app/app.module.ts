import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RtfComponent } from './rtf/rtf.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RtfComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RtfComponent,
    TdfComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

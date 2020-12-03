
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayEncounterComponent } from './components/display-encounter/display-encounter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncounterService } from './services/encounter.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayEncounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    EncounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

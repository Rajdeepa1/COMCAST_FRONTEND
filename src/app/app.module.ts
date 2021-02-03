import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunScriptsComponent } from './run-scripts/run-scripts.component';
import { HttpClientModule } from '@angular/common/http';
import { RunScriptsService } from './run-scripts/run-scripts.service';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';
import { ModalService } from './modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    RunScriptsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    FormsModule
  ],

  providers: [RunScriptsService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

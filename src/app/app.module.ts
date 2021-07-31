import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBarModule } from './search-bar/search-bar.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

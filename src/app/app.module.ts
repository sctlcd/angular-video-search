import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './search/components/logo/logo.component';
import { SearchBarComponent } from './search/containers/search-bar/search-bar.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchInputComponent,
    SearchBarComponent,
    SearchListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

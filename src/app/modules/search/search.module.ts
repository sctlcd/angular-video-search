import { SearchBarComponent } from './containers/search-bar/search-bar.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { LogoComponent } from './components/logo/logo.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Search module
@NgModule({
  declarations: [
    LogoComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchModule { }

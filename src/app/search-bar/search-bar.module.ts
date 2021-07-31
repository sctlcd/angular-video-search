import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { LogoComponent } from './logo/logo.component';
import { SearchBarComponent } from './search-bar.component';



@NgModule({
  declarations: [
    SearchInputComponent,
    LogoComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchInputComponent,
    LogoComponent,
    SearchBarComponent
  ]
})
export class SearchBarModule { }

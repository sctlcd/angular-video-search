import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    SearchInputComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchInputComponent,
    LogoComponent
  ]
})
export class SearchBarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    LogoComponent
  ]
})
export class SearchBarModule { }

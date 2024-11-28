import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SelectorLanguageComponent } from '../potter/pages/selector-language/selector-language.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    SelectorLanguageComponent

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }

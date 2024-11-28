import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotterRoutingModule } from './potter-routing.module';

import { EstudiantesHogwartsPageComponent } from './pages/estudiantes-hogwarts-page/estudiantes-hogwarts-page.component';
import { HogwartsProfesPageComponent } from './pages/hogwarts-profes-page/hogwarts-profes-page.component';
import { HechizosPageComponent } from './pages/hechizos-page/hechizos-page.component';
import { MaterialModule } from '../material/material.module';
import { InicioComponent } from './pages/inicio-page/inicio.component';
import { IniSection1Component } from './pages/ini-section1/ini-section1.component';
import { SectionIni2Component } from './pages/section-ini2/section-ini2.component';
import { Section3IniComponent } from './pages/section3-ini/section3-ini.component';
import { MagosPageComponent } from './pages/magos-page/magos-page.component';



@NgModule({
  declarations: [
    InicioComponent,
    MagosPageComponent,
    EstudiantesHogwartsPageComponent,
    HogwartsProfesPageComponent,
    HechizosPageComponent,
    IniSection1Component,
    SectionIni2Component,
    Section3IniComponent,




  ],
  imports: [
    CommonModule,
    PotterRoutingModule,
    MaterialModule
  ]
})
export class PotterModule { }

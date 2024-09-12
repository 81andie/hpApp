import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotterRoutingModule } from './potter-routing.module';
import { MagosPageComponent } from './pages/magos-page/magos-page.component';
import { EstudiantesHogwartsPageComponent } from './pages/estudiantes-hogwarts-page/estudiantes-hogwarts-page.component';
import { HogwartsProfesPageComponent } from './pages/hogwarts-profes-page/hogwarts-profes-page.component';
import { HechizosPageComponent } from './pages/hechizos-page/hechizos-page.component';
import { MaterialModule } from '../material/material.module';
import { InicioComponent } from './pages/inicio-page/inicio.component';



@NgModule({
  declarations: [
    InicioComponent,
    MagosPageComponent,
    EstudiantesHogwartsPageComponent,
    HogwartsProfesPageComponent,
    HechizosPageComponent,


  ],
  imports: [
    CommonModule,
    PotterRoutingModule,
    MaterialModule
  ]
})
export class PotterModule { }

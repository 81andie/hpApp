import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagosPageComponent } from './pages/magos-page/magos-page.component';
import { EstudiantesHogwartsPageComponent } from './pages/estudiantes-hogwarts-page/estudiantes-hogwarts-page.component';
import { HogwartsProfesPageComponent } from './pages/hogwarts-profes-page/hogwarts-profes-page.component';
import { HechizosPageComponent } from './pages/hechizos-page/hechizos-page.component';
import { InicioComponent } from './pages/inicio-page/inicio.component';

const routes: Routes = [

  {
    path: '',
    component: InicioComponent
  },

  {
    path: 'magos',
    component: MagosPageComponent
  },

  {
    path: 'estudiantes',
    component: EstudiantesHogwartsPageComponent
  },

  {
    path: 'profesores',
    component: HogwartsProfesPageComponent
  },

  {
    path: 'hechizos',
    component: HechizosPageComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PotterRoutingModule { }

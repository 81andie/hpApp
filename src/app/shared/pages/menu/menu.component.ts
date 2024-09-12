import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[]=[];

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Harry Potter App',
        icon: 'pi pi-bolt',
        items: [
          {
            label: 'Inicio',
            icon: 'pi pi-star-fill',
            routerLink: '/'
          },


          {
            label: 'Magos',
            icon: 'pi pi-star-fill',
            routerLink: 'magos'
          },
          {
            label: 'Estudiantes',
            icon: 'pi pi-users',
            routerLink: 'estudiantes'
          },
          {
            label: 'Hogwarts Profesores',
            icon: 'pi pi-book',
            routerLink: 'profesores'
          },

          {
            label: ' Todos los Hechizos',
            icon: 'pi pi-tags',
            routerLink: 'hechizos'
          },

        ]
      }


    ]
  }


}

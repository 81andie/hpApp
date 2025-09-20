import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { translate, TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[]=[];
  constructor (private translocoService: TranslocoService){}

  ngOnInit(){
    this.translocoService
    .selectTranslateObject('menu')
    .subscribe((menuTranslations) => {
      this.menuItems = [
        { label: menuTranslations.inicio, icon: 'pi pi-home', routerLink: ['/'] },
        { label: menuTranslations.magos, icon: 'pi pi-star', routerLink: ['magos'] },
        { label: menuTranslations.estudiantes, icon: 'pi pi-users', routerLink: ['estudiantes'] },
        { label: menuTranslations.hogwartsProfesores, icon: 'pi pi-book', routerLink: ['profesores'] },
        { label: menuTranslations.todosHechizos, icon: 'pi pi-tags', routerLink: ['hechizos'] },
      ];
    });

    this.translocoService.langChanges$.subscribe(() => {
      this.updateMenuItems();
    });


}

private updateMenuItems() {
  this.translocoService.selectTranslateObject('menu').subscribe((menuTranslations) => {
    this.menuItems = [
      { label: menuTranslations.inicio, icon: 'pi pi-home', routerLink: ['/'] },
      { label: menuTranslations.magos, icon: 'pi pi-star', routerLink: ['magos'] },
      { label: menuTranslations.estudiantes, icon: 'pi pi-users', routerLink: ['estudiantes'] },
      { label: menuTranslations.hogwartsProfesores, icon: 'pi pi-book', routerLink: ['profesores'] },
      { label: menuTranslations.todosHechizos, icon: 'pi pi-tags', routerLink: ['hechizos'] },
    ];
  });

}
}

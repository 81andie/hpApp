import { Component, OnInit } from '@angular/core';
declare var AOS: any; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }

}

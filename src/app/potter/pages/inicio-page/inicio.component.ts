import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

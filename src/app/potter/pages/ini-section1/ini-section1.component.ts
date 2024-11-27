import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'ini-section1',
  templateUrl: './ini-section1.component.html',
  styleUrl: './ini-section1.component.css'
})
export class IniSection1Component  implements OnInit {
  ngOnInit(): void {
    AOS.init(
      {
        duration: 3000,  // Duración de las animaciones
        easing: 'ease-out-cubic',  // Efecto de la animación
        offset: 100,  // La distancia antes de que se active la animación
        once: true,  // Solo animar una vez
      }


    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Magia } from '../../interfaces/mago.interface';
import { HarryPotterService } from '../../services/magos.service';

@Component({
  selector: 'app-magos-page',
  templateUrl: './magos-page.component.html',
  styleUrl: './magos-page.component.css'
})
export class MagosPageComponent implements OnInit {

  magias: Magia[] = [];

  constructor(private harryPotterServicios: HarryPotterService) { }


  ngOnInit(): void {
    this.harryPotterServicios.getCharacters().subscribe(data => {
      this.magias = data.slice( 0, 16);
      console.log(this.magias);
    })

  }

  particlesOptions = {
    background: {
      color: { value: "#0d1b2a" }, // Fondo oscuro
    },
    particles: {
      shape: {
        type: "polygon", // Usa formas geométricas
        options: {
          sides: 6, // Número de lados (hexágonos)
        },
      },
      color: { value: ["#ff80f0", "#ffd700", "#ffffff"] },
      opacity: { value: 0.7 },
      size: { value: { min: 3, max: 10 } },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100 },
      },
    },
  };



}

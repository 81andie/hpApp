
import { Component, OnInit } from '@angular/core';
import { Magia } from '../../interfaces/mago.interface';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HarryPotterService } from '../../services/magos.service';





@Component({
  selector: 'app-magos-page',
  templateUrl: './magos-page.component.html',
  styleUrl: './magos-page.component.css'
})
export class MagosPageComponent implements OnInit {

  magias: Magia[] = [];

  constructor(private harryPotterServicios: HarryPotterService,

  ) { }






  async ngOnInit(): Promise<void> {
    this.harryPotterServicios.getCharacters().subscribe(data => {
      this.magias = data.slice( 0, 16);
      console.log(this.magias);
    })

    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });

  }



}








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



}

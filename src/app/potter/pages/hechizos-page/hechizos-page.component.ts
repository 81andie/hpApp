import { Component, OnInit } from '@angular/core';
import { Magia } from '../../interfaces/mago.interface';
import { HarryPotterService } from '../../services/magos.service';

@Component({
  selector: 'app-hechizos-page',
  templateUrl: './hechizos-page.component.html',
  styleUrl: './hechizos-page.component.css'
})
export class HechizosPageComponent implements OnInit{

  spells: Magia[]=[];

  constructor (private harryPotterService: HarryPotterService){ }


  ngOnInit(): void {
    this.harryPotterService.getSpells().subscribe(data =>{
      this.spells = data;
      console.log(this.spells)
    })

}
}

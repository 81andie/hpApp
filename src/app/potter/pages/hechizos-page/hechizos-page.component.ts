import { Component, OnInit } from '@angular/core';
import { Magia, Spell } from '../../interfaces/mago.interface';
import { HarryPotterService } from '../../services/magos.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-hechizos-page',
  templateUrl: './hechizos-page.component.html',
  styleUrl: './hechizos-page.component.css'
})
export class HechizosPageComponent implements OnInit{

  spells: Spell[]=[];
  constructor (private harryPotterService: HarryPotterService){ }


  ngOnInit(): void {
this.getSpell();

}


getSpell(){
  this.harryPotterService.getSpells().subscribe(data =>{
    this.spells = data;
    console.log(this.spells)
  })

  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
  });
}





}

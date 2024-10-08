import { Component, OnInit } from '@angular/core';
import { Magia } from '../../interfaces/mago.interface';
import { HarryPotterService } from '../../services/magos.service';

@Component({
  selector: 'app-hogwarts-profes-page',
  templateUrl: './hogwarts-profes-page.component.html',
  styleUrl: './hogwarts-profes-page.component.css'
})
export class HogwartsProfesPageComponent  implements OnInit{
  staff: Magia[]=[];

  constructor (private harryPotterService: HarryPotterService){ }


  ngOnInit(): void {
    this.harryPotterService.getStaff().subscribe(data =>{
      this.staff = data.slice(0,10);
      console.log(this.staff)
    })

}
}

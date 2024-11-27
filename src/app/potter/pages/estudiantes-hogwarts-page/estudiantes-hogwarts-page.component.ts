import { Component,OnInit } from '@angular/core';
import { Magia } from '../../interfaces/mago.interface';
import { HarryPotterService } from '../../services/magos.service';


declare var AOS: any; 
/*comentari de proba*/

@Component({
  selector: 'app-estudiantes-hogwarts-page',
  templateUrl: './estudiantes-hogwarts-page.component.html',
  styleUrl: './estudiantes-hogwarts-page.component.css'
})

export class EstudiantesHogwartsPageComponent implements OnInit{

  estudents: Magia[]=[];

  constructor (private harryPotterService: HarryPotterService){ }


  ngOnInit(): void {
    this.harryPotterService.getStudents().subscribe(data =>{
      this.estudents = data.slice(0,10);
      console.log(this.estudents)
    })

    AOS.init({
      duration: 3000,
      easing: 'ease',
      once: true,
    });
  }


}

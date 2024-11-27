import { Component, OnInit } from '@angular/core';
declare var AOS: any; 

@Component({
  selector: 'section3-ini',
  templateUrl: './section3-ini.component.html',
  styleUrl: './section3-ini.component.css'
})
export class Section3IniComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 3000,
      easing: 'ease',
      once: true,
    });
  }
}

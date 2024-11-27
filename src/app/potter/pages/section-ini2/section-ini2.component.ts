import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'section-ini2',
  templateUrl: './section-ini2.component.html',
  styleUrl: './section-ini2.component.css'
})
export class SectionIni2Component implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }

}

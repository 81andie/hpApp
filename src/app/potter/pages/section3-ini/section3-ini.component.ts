import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'section3-ini',
  templateUrl: './section3-ini.component.html',
  styleUrl: './section3-ini.component.css'
})
export class Section3IniComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 1700,
      easing: 'ease',
      once: true,
    });
  }
}

import { Component, OnInit } from '@angular/core';

declare var AOS: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  ngOnInit(): void {

    AOS.init({
      duration: 2000,
      easing: 'ease',
      once: true,
    });

  }

}

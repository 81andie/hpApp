import { Component, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-error404page',
  templateUrl: './error404page.component.html',
  styleUrl: './error404page.component.css'
})
export class Error404pageComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 500,
      easing: 'ease',
      once: true,
    });


}
}


import { Component } from '@angular/core';


@Component({
  selector: 'selector-language',
  templateUrl: './selector-language.component.html',
  styleUrl: './selector-language.component.css'
})
export class SelectorLanguageComponent {

  value!:string;

  options: any[]=[
    { language: 'English', value: 'en' },
    { language: 'Spanish', value: 'es' },
    { language: 'Catalán', value: 'ca' }

  ]



}

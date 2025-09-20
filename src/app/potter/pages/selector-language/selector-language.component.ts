import { TranslocoService } from '@ngneat/transloco';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from '../../services/languageService';


@Component({
  selector: 'selector-language',
  templateUrl: './selector-language.component.html',
  styleUrl: './selector-language.component.css'
})
export class SelectorLanguageComponent  implements OnInit {

  value!: string;

  options: any[] = [
    { language: 'English', value: 'en' },
    { language: 'Spanish', value: 'es' },
    { language: 'Catalán', value: 'ca' }

  ]

  public myForm: FormGroup = this.fb.group({
    language: [''],
  })

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService
  ) { }
  ngOnInit(): void {

  }


onLanguageChange(){
  const selectedLanguage = this.myForm.get('language')?.value;
  const currentLanguage= this.languageService.getActiveLanguage();

if(selectedLanguage !== currentLanguage){
  this.languageService.setLanguage(selectedLanguage);
  console.log(`Idioma cambiado a: ${selectedLanguage}`)
}else{
  console.log(`El idioma ya está activo: ${selectedLanguage}`);
}

}


}

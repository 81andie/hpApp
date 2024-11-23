import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Magia, Spell } from '../interfaces/mago.interface';

@Injectable({providedIn: 'root'})



export class HarryPotterService {

  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  private apiUrlEstudiantes = 'https://hp-api.onrender.com/api/characters/students';

  private apiUrlTeachers = 'https://hp-api.onrender.com/api/characters/staff';

  private apiUrlSpells = 'https://hp-api.onrender.com/api/spells';



  constructor(private http:HttpClient) {}

  getCharacters(): Observable<Magia[]>{
    return this.http.get<Magia[]>(this.apiUrl);
  }

  getStudents(): Observable<Magia[]>{
  return this.http.get<Magia[]>(this.apiUrlEstudiantes)}

  getStaff(): Observable<Magia[]>{
    return this.http.get<Magia[]>(this.apiUrlTeachers)}

    getSpells(): Observable<Spell[]>{
      return this.http.get<Spell[]>(this.apiUrlSpells)}


}

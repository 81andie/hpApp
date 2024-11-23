import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Magia, Spell } from '../interfaces/mago.interface';

@Injectable({ providedIn: 'root' })



export class HarryPotterService {

  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  private apiUrlEstudiantes = 'https://hp-api.onrender.com/api/characters/students';

  private apiUrlTeachers = 'https://hp-api.onrender.com/api/characters/staff';

  private apiUrlSpells = 'https://hp-api.onrender.com/api/spells';



  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.apiUrl);
  }

  getStudents(): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.apiUrlEstudiantes)
  }

  getStaff(): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.apiUrlTeachers)
  }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.apiUrlSpells).pipe(
      map((spells) =>
        spells.map((spell) => ({
          ...spell,
          image: this.getSpellImage(spell.name)
        })))
    )
  }


  private getSpellImage(name: string): string {
    if (!name) return 'assets/images/spells.png';

    const images: { [key: string]: string } = {
      "Aberto": 'assets/images/imgOpt/aberto.jpg',
      "Accio": 'assets/images/imgOpt/accio.jpg',
      "Aguamenti": 'assets/images/imgOpt/aguamenti.jpg',
      "Alohomora": 'assets/images/imgOpt/alohomora.jpg',
      "Anapneo": 'assets/images/imgOpt/anapneo.jpg',
      "Aparecium": 'assets/images/imgOpt/aparecium.jpg',
      "Apparate": 'assets/images/imgOpt/apparate.jpg',
      "Ascendio": 'assets/images/imgOpt/ascendio.jpg',
      "Avada Kedavra":'assets/images/imgOpt/avadaKedavra.jpg',
      "Avis":'assets/images/imgOpt/avis.jpg',
      "Bat": 'assets/images/imgOpt/bat.jpg',
      "Bombardo":'assets/images/imgOpt/bombar.jpeg',
      "Brackium Emendo": 'assets/images/imgOpt/brackiumEmendo.jpg',
      "Capacious Extremis": 'assets/images/imgOpt/capaciusExtremis.jpg',
      "Confundo": 'assets/images/imgOpt/confundo.jpg',
      "Conjunctivitis Curse": 'assets/images/imgOpt/conjuctivitisCurse.jpg',
      "Crinus Muto": 'assets/images/imgOpt/crinusmuto.jpg',
      "Crucio": 'assets/images/imgOpt/crucio.jpg',
      "Diffindo": 'assets/images/imgOpt/diffindo.jpg',
      "Disapparate":'assets/images/imgOpt/disaparrate.webp',
      "Engorgio": 'assets/images/imgOpt/engorgio.jpg',
      "Episkey": 'assets/images/imgOpt/episkey.jpg',
      "Expecto patronum":'assets/images/imgOpt/expectopatronum.jpg',
      "Erecto": 'assets/images/imgOpt/erecto.webp',
      "Evanesco": 'assets/images/imgOpt/evanesco.jpg',
      "Expelliarmus": 'assets/images/imgOpt/expelliarmus.jpg',
      "Ferula": 'assets/images/imgOpt/ferula.jpg',
      "Fidelius Charm": 'assets/images/imgOpt/fideliusCharm.jpg',
      "Fiendfyre Curse": 'assets/images/imgOpt/fiendfire.jpg',
      "Finite Incantatem": 'assets/images/imgOpt/finiteincantatem.jpg',
      "Furnunculus Curse": 'assets/images/imgOpt/furnunculos.jpg',
      "Geminio": 'assets/images/imgOpt/geminio.jpg',
      "Glisseo": 'assets/images/imgOpt/glisseo.jpg',
      "Homenum Revelio": 'assets/images/imgOpt/homenumrevelio.jpg',
      "Homonculus Charm": 'assets/images/imgOpt/homonculuscharm.jpg',
      "Immobulus": 'assets/images/imgOpt/immobulus.jpg',
      "Impedimenta": 'assets/images/imgOpt/impedimenta.jpg',
      "Imperio": 'assets/images/imgOpt/imperio.jpg',
      "Impervius": 'assets/images/imgOpt/impervius.jpg',
      "Incarcerous": 'assets/images/imgOpt/incarcerous.jpg',
      "Incendio": 'assets/images/imgOpt/incendio.jpg',
      "Langlock": 'assets/images/imgOpt/langlock.jpg',
      "Legilimens": 'assets/images/imgOpt/legiliments.jpg',
      "Levicorpus": 'assets/images/imgOpt/levicorpus.jpg',
      "Locomotor Mortis": 'assets/images/imgOpt/locomotormortis.webp',
      "Lumos": 'assets/images/imgOpt/lumos.jpg',
      "Morsmordre": 'assets/images/imgOpt/morsmordre.jpg',
      "Mucus Ad Nauseam": 'assets/images/imgOpt/mucusandnauseam.png',
      "Muffliato": 'assets/images/imgOpt/Muffliato.jpg',
      "Nox": 'assets/images/imgOpt/nox.gif',
      "Obliviate": 'assets/images/imgOpt/obliviate.jpg',
      "Oculus Reparo": 'assets/images/imgOpt/occulusreparo.jpg',
      "Oppugno": 'assets/images/imgOpt/oppugno.jpg',
      "Periculum": 'assets/images/imgOpt/periculum.jpg',
      "Petrificus totalus": 'assets/images/imgOpt/petrificustotalus.jpg',
      Piertotum: 'assets/images/imgOpt/piertotumlocomotor.jpg',
      Protean: 'assets/images/imgOpt/proteancharm.webp',
      Protego: 'assets/images/imgOpt/protego.jpg',
      Reducio: 'assets/images/imgOpt/reducto.jpg',
      Rennerva:'assets/images/imgOpt/rennervate.jpg',
      Reparifors:'assets/images/imgOpt/reparifors.webp',
      Reparo:'assets/images/imgOpt/reparo.jpg',
      RictusSempra:'assets/images/imgOpt/rictussempra.jpg',
      Riddiculus:'assets/images/imgOpt/riddiculus.jpg',
      Scourgify:'assets/images/imgOpt/scourgify.webp',
      Sectum:'assets/images/imgOpt/sectumsempra.jpg',
      Serpersortia:'assets/images/imgOpt/sepersortia.jpg',
      Silencio:'assets/images/imgOpt/silencio.jpg',
      Sonorus:'assets/images/imgOpt/sonorus.webp',
      Sponfygy:'assets/images/imgOpt/sponfigy.webp',
      Stupefy:'assets/images/imgOpt/stupefy.jpg',
      Tarantallegra:'assets/images/imgOpt/tarantallegra.jpg',
      Ubreak:'assets/images/imgOpt/ubreakablevow.webp',
      Wingardium:'/assets/images/imgOpt/wingardiumleviosa.jpg',


    }

    return images[name] || 'assets/images/imgOpt/spells.png';
  }


}

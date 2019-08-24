import { Component, OnInit } from '@angular/core';
import { PotrawyService } from '../services/potrawy.service'
import {ResponsiveService} from '../services/responsive.service';

export interface Potrawa {
  nazwa: string;
  cena: number;
  jednostka: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  public potrawyData: Array<any>;
  public currentJogging: any;
  isPhone;
  Potrawy: Potrawa[] = [
    {nazwa: "Devolay", cena: 12.20, jednostka: "kg"},
    {nazwa: "Rolady", cena: 2.20, jednostka: "op"},
    {nazwa: "Pieczeń z kurczaka", cena: 42.20, jednostka: "l"},
    {nazwa: "Golonko", cena: 4.14, jednostka: "l"},
    {nazwa: "Bigos", cena: 2.20, jednostka: "op"},
    {nazwa: "Kotlet schabowy z szynką i serem", cena: 42.20, jednostka: "l"},
    {nazwa: "Fasolka", cena: 2.40, jednostka: "op"},
    {nazwa: "Gołąbki z mięsem i ryżem", cena: 5.20, jednostka: "op"},
    {nazwa: "Kotlet mielony", cena: 62.20, jednostka: "kg"},
    {nazwa: "Kotlet chabowy", cena: 2.20, jednostka: "op"},
    {nazwa: "Kotlet ziemniaczany", cena: 2.20, jednostka: "op"},
    {nazwa: "Kotlet jajeczny", cena: 2.20, jednostka: "op"},
    {nazwa: "Kotlet z kaszy", cena: 12.20, jednostka: "kg"},
    {nazwa: "Kotlet drobiowy", cena: 2.40, jednostka: "op"},
    {nazwa: "Łazanki", cena: 4.14, jednostka: "l"},
    {nazwa: "Szaszłyki", cena: 5.20, jednostka: "op"},
    {nazwa: "Pieczeń ze schabu", cena: 62.20, jednostka: "kg"},
    {nazwa: "Pierogi ruskie", cena: 2.20, jednostka: "op"},
    {nazwa: "Pierogi z kapustą i grzybami", cena: 2.20, jednostka: "op"},
    {nazwa: "Pierogi z mięsem", cena: 2.20, jednostka: "op"},
    {nazwa: "Pierogi z serem", cena: 12.20, jednostka: "kg"},
    {nazwa: "Pierogi ze szpinakiem", cena: 2.40, jednostka: "op"},
    {nazwa: "Ryba w zalewie octowej?", cena: 2.20, jednostka: "op"},
    {nazwa: "Kurczak w zalewie octowej?", cena: 2.20, jednostka: "op"},
    {nazwa: "Szałot", cena: 5.20, jednostka: "op"},
    {nazwa: "Barszcz", cena: 42.20, jednostka: "l"},
    {nazwa: "Udka faszerowane", cena: 62.20, jednostka: "kg"},
    {nazwa: "Udka z kurczaka", cena: 2.20, jednostka: "op"}
  ]

  Zupy: Potrawa[] = [
    {nazwa: "Żurek", cena: 2.20, jednostka: "op"},
    {nazwa: "Pomidorowa", cena: 2.20, jednostka: "op"},
    {nazwa: "Koperkowa", cena: 2.20, jednostka: "op"},
    {nazwa: "Zupa ogórkowa", cena: 2.20, jednostka: "op"},
    {nazwa: "Barszcz", cena: 2.20, jednostka: "op"},
    {nazwa: "Rosół", cena: 4.14, jednostka: "l"},
    {nazwa: "Grochówka", cena: 2.20, jednostka: "op"}
  ]
  
  Dodatki: Potrawa[] = [
    {nazwa: "Czerwona kapusta gotowana", cena: 2.20, jednostka: "op"},
    {nazwa: "Galert wieprzowy", cena: 2.20, jednostka: "op"},
    {nazwa: "Kapusta zasmażana", cena: 2.20, jednostka: "op"},
    {nazwa: "Kluski ciemne", cena: 2.20, jednostka: "op"},
    {nazwa: "Kluski jasne", cena: 2.20, jednostka: "op"},
    {nazwa: "Kluski z mięsem?", cena: 2.20, jednostka: "op"},
    {nazwa: "Kluski ze szpinakiem", cena: 2.20, jednostka: "op"},
    {nazwa: "Krokiety z kapustą i grzybami", cena: 2.20, jednostka: "op"},
    {nazwa: "Krokiet z mięsem", cena: 2.20, jednostka: "op"},
    {nazwa: "Parzybuły?", cena: 2.20, jednostka: "op"},
    {nazwa: "Roladki drobiowe?", cena: 2.20, jednostka: "op"},
    {nazwa: "Sałatka makaronowa", cena: 2.20, jednostka: "op"},
    {nazwa: "Smalec", cena: 2.20, jednostka: "op"},
    {nazwa: "Sos pieczeniowy", cena: 2.20, jednostka: "op"},
    {nazwa: "Sos pomidorowy", cena: 2.20, jednostka: "op"},
    {nazwa: "Surówka z białej kapusty", cena: 2.20, jednostka: "op"},
    {nazwa: "Surówka z marchewki", cena: 2.20, jednostka: "op"},
    {nazwa: "Szałot śląski", cena: 2.20, jednostka: "op"},
    {nazwa: "Śledź w oleju", cena: 2.20, jednostka: "op"},
    {nazwa: "Tymbaliki drobiowe", cena: 2.20, jednostka: "op"}
  ]
  
  constructor(private potrawyService: PotrawyService, private _responsive: ResponsiveService) {
    this.potrawyService.get().subscribe((data: any) => this.potrawyData = data);
  }

  ngOnInit() {
    this.isPhone = this._responsive.isHandset$;
  }

}

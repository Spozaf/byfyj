import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

export interface UslugaInfo {
  nazwaUsluga: string;
  tekstUsluga: string;
}

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent implements OnInit {
  index: number;

  Uslugi: UslugaInfo[] = [
    {nazwaUsluga: "Catering", 
    tekstUsluga: `W naszej ofercie odnajdą Państwo propozycje usług caterigowych skierowane do osób poszukujących doskonałej oprawy kulinarnej dla spotkań spędzanych w prywatnym gronie – w domu, ogrodzie czy też w wynajętym lokalu. Oczywiście zapewniamy również dostawę pod wskazany adres. `
  },
    {nazwaUsluga: "Imprezy okolicznościowe", tekstUsluga: "Przyjdą goście, którym kiszki marsza grają? Komunia, chrzciny, wesele, przyjęcie rodzinne? Będzie impreza? Masz pomysł na oryginalne danie? Zadzwoń. Nasza babcia jest wirtuozem noża i patelni. Wyczaruje wykwintne potrawy na zamówienie w mgnieniu oka. "},
    {nazwaUsluga: "Obiady dla Firm", tekstUsluga: "A może trzeba nakarmić dzielną załogę? Wiadomo jak Polak głodny to … nieefektywny. Z pełnym brzuchem każdy jest chętny do pracy. No i współracuje się lepiej. Szczególnie po naszych pysznościach! Pomożemy – zadzwoń i zamów – my dostarczymy. "},
    {nazwaUsluga: "O nas", tekstUsluga: `Naszą pasją jest kuchnia zdrowa, smaczna i oparta na tradycyjnych recepturach. Nie używamy żadnych konserwantów, sztucznych dodatków czy nawet gotowych mieszanek przypraw. Wszystko przygotowujemy tylko i wyłącznie ze świeżych składników. W  naszej kuchni nie ma miejsca dla mrożonek,  półproduktów, konserwantów czy polepszaczy. W przygotowanie dań  wkładamy całe serce, zdobytą wiedzę i niemałe już doświadczenie.
    Naszą dewizą jest tanio i dobrze. A to oznacza, że oferowane posiłki cechuje krótki, przejrzysty skład, skromne opakowanie, możliwość zakupu na wagę, używanie tylko naturalnych sezonowych składników - przede wszystkim rosnących w naszym klimacie warzyw i owoców. Dzięki temu są one  źródłem błonnika i zapewniają bogactwo witamin.`}
    ]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.index)
    this.index = this.data.index;
    console.log(this.index)
  }

}

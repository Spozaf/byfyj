import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../services/responsive.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {
  isPhone;
  constructor(private _responsive: ResponsiveService) { }

  ngOnInit() {
    this.isPhone = this._responsive.isHandset$;
  }

}

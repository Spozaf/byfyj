import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../services/responsive.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isPhone;
  constructor(private _responsive: ResponsiveService) { }

  ngOnInit() {
    this.isPhone = this._responsive.isHandset$;
  }

}

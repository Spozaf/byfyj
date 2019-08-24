import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../services/responsive.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import { HomeDialogComponent } from '../home-dialog/home-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  isPhone;

  fileNameDialogRef: MatDialogRef<HomeDialogComponent>;

  constructor(
    private _responsive: ResponsiveService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.isPhone = this._responsive.isHandset$;
  }

  openInfoDialog(index: number): void{
    console.log('IfoDialogClick');
    console.log(index);
    this.fileNameDialogRef = this.dialog.open(HomeDialogComponent,{
      data: { index: index }});
  }
}

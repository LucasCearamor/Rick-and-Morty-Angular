import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-episodes-dialog',
  templateUrl: './episodes-dialog.component.html',
  styleUrls: ['./episodes-dialog.component.css'],
  template: 'passed in {{ data.episodes }}',
})
export class EpisodesDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {episodes: any}) { }

}

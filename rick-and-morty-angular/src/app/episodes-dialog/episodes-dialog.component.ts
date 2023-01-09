import { Component,Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episodes-dialog',
  templateUrl: './episodes-dialog.component.html',
  styleUrls: ['./episodes-dialog.component.css'],
  template: 'passed in {{ data.episodes }}',
})
export class EpisodesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
    public data: {episodes: any},
    private APIService: APIService,
  ) {}

  ngOnInit() {
    // console.log('data',this.data);
    this.getEpisodes(this.data.episodes);

  }

  episodes: any = [];

  getEpisodes(ep: any) {
    for (let i = 0; i < ep.length; i++) {
      this.APIService.getEpisodes(ep[i]).subscribe(
        (d) => {
          this.episodes.push(d);
        }
      )
    }
  }

}

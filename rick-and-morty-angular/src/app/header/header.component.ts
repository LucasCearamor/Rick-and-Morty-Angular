import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import {MatDialog} from '@angular/material/dialog';
import { EpisodesDialogComponent } from '../episodes-dialog/episodes-dialog.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  dados: any = [];
  page: any = 1;
  episodes: any = [];

  constructor(
    private APIService: APIService,
    public Dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getCharacters(this.page);
  }

  status(status: any) {

    if (status == 'Alive') {
      return 'Alive';
    }

    if (status == 'Unknown') {
      return 'Unknown';
    }

    if (status == 'Dead') {
      return 'Dead';
    }
    return;
  }

  getCharacters(page: number) {
    this.page = page;
    this.APIService.getCharacters(page).subscribe(
      (data) => {
        this.dados = data;
      }
    )
  }

  getEpisodes(ep: any) {
    this.episodes = ep.episode;
  }

  openDialog() {
    this.Dialog.open(EpisodesDialogComponent,{})
    data: {

    };
  }
}

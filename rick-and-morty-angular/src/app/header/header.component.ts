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
  page: number = 1;
  episodes: any = [];
  searchData: any = [];
  searchtext: string = "";

  constructor(
    private APIService: APIService,
    public Dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getCharacters(this.page, this.searchtext);
  }

  status(status: any) {
    if (status == 'Alive') {
      return 'Alive';
    }

    if (status == 'Dead') {
      return 'Dead';
    }

    return 'Unknown';
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  getCharacters(page: number, name: string) {
    this.page = page;
    this.searchtext = name;
    this.APIService.getCharacters(page,name).subscribe(
      (data) => {
        this.dados = data;
        console.log(this.dados);
      }
    )
    this.backToTop();
  }

  openDialog(ep: any) {
    this.Dialog.open(EpisodesDialogComponent, {
      data: {
        episodes: ep
      }
    });
  }

  statusIcon(status: any) {
    if (status == 'Alive') {
      return 'sentiment_very_satisfied';
    }

    if (status == 'Dead') {
      return 'sentiment_very_dissatisfied';
    }

    return 'sentiment_neutral';
  }

}

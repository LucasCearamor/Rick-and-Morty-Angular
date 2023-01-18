import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import {MatDialog} from '@angular/material/dialog';
import { EpisodesDialogComponent } from '../episodes-dialog/episodes-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

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
  error: boolean = false;
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
        if (this.error = true) {
          this.error = false;
        }

        this.dados = data;
      },
      
      (error) => {
        this.error = true;
        this.openDialogError(this.error);

        this.APIService.getCharacters(page,'').subscribe(
          (n) => {
            this.dados = n;
          }
        );

      }
    )
    this.backToTop();
  }

  openDialogEpisodes(ep: any) {
    this.Dialog.open(EpisodesDialogComponent, {
      data: {
        episodes: ep
      }
    });
  }

  openDialogError(error: boolean) {
    if (error == true) {
      this.Dialog.open(ErrorDialogComponent, {});
    }
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

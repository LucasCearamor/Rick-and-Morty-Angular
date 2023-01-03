import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  dados: any = [];
  page: any = 1;
  episodes: any = [];

  constructor(private APIService: APIService) { }

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
    return this.episodes = ep.episode;
  }
}

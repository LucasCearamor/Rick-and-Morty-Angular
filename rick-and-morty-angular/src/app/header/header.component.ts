import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  dados: any = [];

  constructor(private APIService: APIService ) {}

  ngOnInit(){
    this.APIService.getCharacters().subscribe(
      (data) => {
        this.dados = data;
        console.log(this.dados);

      },
      (error) => {
        console.log(error);
      }
    )
  }
}

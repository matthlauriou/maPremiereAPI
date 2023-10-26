import { Component, OnInit } from '@angular/core';
import { VoitureModel } from '../models/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  voitures: Array<VoitureModel>;

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.voitureService.getVoitures().subscribe(data => {
      this.voitures = data;
    }
      
    )
  }

}

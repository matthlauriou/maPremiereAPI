import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '../constantes/routes.constantes';
import { DetailVoitureModel } from '../models/detailVoiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  voiture: DetailVoitureModel;
  errorMessage: String;  // Message d'erreur initial vide

  constructor(private router: Router, private route: ActivatedRoute, private voitureService: VoitureService) { 
    this.voiture = new DetailVoitureModel;
    this.errorMessage = "";
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.voitureService.getVoiture(id).subscribe(
        response => {
          this.voiture = response;
        },
        error => {
          this.errorMessage = JSON.stringify(error);
        }
      );
    });
  }

  fermer(){
    this.router.navigate([ROUTES.HOME]);
  }

}

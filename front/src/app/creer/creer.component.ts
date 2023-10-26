import { Component, OnInit } from '@angular/core';
import { VoitureModel } from '../models/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent {

  nouvelleVoiture: VoitureModel;
  successMessage: String; // Message de succès initial vide
  errorMessage: String;  // Message d'erreur initial vide

  constructor(private voitureService: VoitureService) {
    this.nouvelleVoiture = new VoitureModel;
    this.successMessage = "";
    this.errorMessage = "";
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Empêche la redirection par défaut
    this.successMessage = "";
    this.errorMessage = "";
    this.voitureService.postVoiture(this.nouvelleVoiture).subscribe(
      response => {
        this.successMessage = "Voiture créée avec succès";
      },
      error => {
        this.errorMessage = JSON.stringify(error);
      }
    );
  }

}

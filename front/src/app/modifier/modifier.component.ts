import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoitureModel } from '../models/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  voiture: VoitureModel;
  successMessage: String; // Message de succès initial vide
  errorMessage: String;  // Message d'erreur initial vide

  constructor(private route: ActivatedRoute, private voitureService: VoitureService) {
    this.voiture = new VoitureModel;
    this.successMessage = "";
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

  onSubmit(event: Event) {
    event.preventDefault(); // Empêche la redirection par défaut
    this.successMessage = "";
    this.errorMessage = "";
    this.voitureService.putVoiture(this.voiture).subscribe(
      response => {
        this.successMessage = "Voiture modifiée avec succès";
      },
      error => {
        this.errorMessage = JSON.stringify(error);
      }
    );
  }

}

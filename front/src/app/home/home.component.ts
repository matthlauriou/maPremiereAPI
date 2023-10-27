import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../constantes/routes.constantes';
import { VoitureModel } from '../models/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  voitures: Array<VoitureModel>;
  successMessage: String; // Message de succès initial vide
  errorMessage: String;  // Message d'erreur initial vide

  constructor(private router: Router, private voitureService: VoitureService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.voitureService.getVoitures().subscribe(
      data => {
        this.voitures = data;
      },
      error => {
        this.errorMessage = JSON.stringify(error);
      }
    );
  }

  initMessages() {
    this.successMessage = "";
    this.errorMessage = "";
  }

  naviguerDetail(id : number) {
    this.router.navigate([ROUTES.DETAIL], { queryParams: { id: id } });
  }

  naviguerModification(id : number) {
    this.router.navigate([ROUTES.MODIFIER], { queryParams: { id: id } });
  }

  confirmerSuppression(id : number): void {
    this.initMessages();

    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // L'utilisateur a confirmé
        this.voitureService.deleteVoiture(id).subscribe(
          response => {
            if(response) {
              this.voitures = this.voitures.filter(voiture => voiture.id === id);
              this.successMessage = "Voiture supprimée avec succès";
            } else {
              this.successMessage = "Voiture non supprimée";
            }
          },
          error => {
            this.errorMessage = JSON.stringify(error);
          }
        );
      } else {
        // L'utilisateur a annulé
        this.successMessage = "Annulation de la suppression";
      }
    });

  }
}

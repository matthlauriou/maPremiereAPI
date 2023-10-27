import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

  // Cette méthode est appelée lorsque l'utilisateur confirme
  confirm(): void {
    this.dialogRef.close(true); // Ferme la boîte de dialogue en indiquant que l'utilisateur a confirmé
  }

  // Cette méthode est appelée lorsque l'utilisateur annule
  cancel(): void {
    this.dialogRef.close(false); // Ferme la boîte de dialogue en indiquant que l'utilisateur a annulé
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../constantes/routes.constantes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) { }

  naviguerAccueil() {
    this.router.navigate([ROUTES.HOME]);
  }

  naviguerCreation() {
    this.router.navigate([ROUTES.CREER]);
  }


}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './constantes/routes.constantes';
import { CreerComponent } from './creer/creer.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ModifierComponent } from './modifier/modifier.component';

const routes: Routes = [
  { path: '', redirectTo: ROUTES.HOME, pathMatch: 'full' },
  { path: ROUTES.HOME, component: HomeComponent },
  { path: ROUTES.CREER, component: CreerComponent },
  { path: ROUTES.MODIFIER, component: ModifierComponent },
  { path: ROUTES.DETAIL, component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VoitureModel } from '../models/voiture.model';
import { environment } from 'src/environments/environment';
import { DetailVoitureModel } from '../models/detailVoiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  // Méthode pour effectuer une requête GET
  getVoitures(): Observable<Array<VoitureModel>> {
    //const url = `${environment.baseUrl}/voitures`;
    //return this.http.get(url);

    const data = [
        {
            'id' : 1,
            'marque' : 'porsche',
            'modele' : 'c3',
            'couleur' : 'noire'
        },
        {
            'id' : 2,
            'marque' : 'renault',
            'modele' : 'zoé',
            'couleur' : 'violette'
        }
    ];
    return of(data);
  }

  // Méthode pour effectuer une requête GET
  getVoiture(id : number): Observable<DetailVoitureModel> {
    //const url = `${environment.baseUrl}/voitures/${id}`;
    //return this.http.get(url);

    const data =
        {
            'id' : 1,
            'marque' : 'porsche',
            'modele' : 'c3',
            'couleur' : 'noire',
            'energie' : 'electrique',
            'prix' : 35000
        };

    return of(data);
  }

  // Méthode pour effectuer une requête POST
  postVoiture(voitureModel: VoitureModel): Observable<VoitureModel> {
    //const url = `${environment.baseUrl}/voitures`;
    //return this.http.post<VoitureModel>(url, voitureModel);

    const data =
        {
            'id' : 1,
            'marque' : 'porsche',
            'modele' : 'c3',
            'couleur' : 'noire'
        };

    return of(data);
  }

  // Méthode pour effectuer une requête PUT
  putVoiture(voitureUpdate: VoitureModel): Observable<VoitureModel> {
    //const url = `${environment.baseUrl}/voiture`;
    //return this.http.put<VoitureModel>(url, voitureUpdate);

    const data =
        {
            'id' : 1,
            'marque' : 'porsche',
            'modele' : 'c3',
            'couleur' : 'noire'
        };

    return of(data);
  }

  // Méthode pour effectuer une requête DELETE
  deleteVoiture(id: number): Observable<boolean> {
    //const url = `${environment.baseUrl}/voiture/${id}`;
    //return this.http.delete<boolean>(url);

    const data = true;

    return of(data);
  }
}

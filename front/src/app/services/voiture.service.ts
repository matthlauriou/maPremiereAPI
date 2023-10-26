import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VoitureModel } from '../models/voiture.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  // Méthode pour effectuer une requête GET
  getVoitures(): Observable<Array<VoitureModel>> {
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

    //const url = `${environment.baseUrl}/voitures`;
    //return this.http.get(url);
  }

  // Méthode pour effectuer une requête POST
  postVoiture(voitureModel: VoitureModel): Observable<any> {
    const url = `${environment.baseUrl}/voitures`;
    return this.http.post(url, voitureModel);
  }

 /* // Méthode pour effectuer une requête PUT
  putDonnees(id: number, data: any): Observable<any> {
    const url = `${environment.baseUrl}/donnees/${id}`;
    return this.http.put(url, data);
  }

  // Méthode pour effectuer une requête DELETE
  deleteDonnees(id: number): Observable<any> {
    const url = `${environment.baseUrl}/donnees/${id}`;
    return this.http.delete(url);
  }*/
}

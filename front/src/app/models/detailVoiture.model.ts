import { VoitureModel } from "./voiture.model";

export class DetailVoitureModel extends VoitureModel {
    // Propriétés
    public energie: string;
    public prix: number;

    // Constructeur
    constructor() {
        super();
        this.energie = '';
        this.prix = 0;
    }
}

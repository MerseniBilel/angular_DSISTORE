import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http : HttpClient) { }
  getFraisLivraison () {
   return this.http.get('/assets/livraison.json');
 }
}

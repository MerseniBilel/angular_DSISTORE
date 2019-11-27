import { Component } from '@angular/core';

import { produits } from '../produits';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent {
  produits = produits;
  constructor(
    private panierServ: PanierService
  ) { }
  share() {
    window.alert('Le produit a été partagé!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ajouterAuPanier(produit){
    window.alert('we are adding your product to our cart');
    this.panierServ.ajouterAuPanier(produit);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produits } from '../produits';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
  produit;
  constructor(
    private route: ActivatedRoute,
    private panierServ: PanierService
  ) { }
    
  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
    this.produit = produits[+params.get('produitId')];
  });
  }

  ajouterAuPanier(produit){
    window.alert('we are adding your product to our cart');
    this.panierServ.ajouterAuPanier(produit);
  }

  


}

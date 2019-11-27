import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }
  panier = [];
  total = 0;
ajouterAuPanier(produit){
    this.panier.push(produit);
  }

getAchats(){
  return this.panier;
  }

viderPanier(){
 this.panier = [];

 return this.panier;
  }

 totalPanier() {
   // tslint:disable-next-line:prefer-for-of
   for (let i = 0 ; i < this.panier.length ; i++){
    this.total += this.panier[i].prix;
   }
   return  Number(this.total);
 }

}

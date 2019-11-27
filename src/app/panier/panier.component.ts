import { Component, OnInit } from '@angular/core';
import {PanierService} from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier;
  tot;

  constructor(
    private panierServ: PanierService
  ) { }

  ngOnInit() {
  this.panier = this.panierServ.getAchats();
  this.tot = this.panierServ.totalPanier();
  }


}

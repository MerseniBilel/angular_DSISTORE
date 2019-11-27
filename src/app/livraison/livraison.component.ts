import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../livraison.service';
@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  Liv;
  constructor(private LivServ : LivraisonService) { }

  ngOnInit() {
    this.Liv = this.LivServ.getFraisLivraison();
  }

}

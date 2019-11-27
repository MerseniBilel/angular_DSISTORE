import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alertes-produits',
  templateUrl: './alertes-produits.component.html',
  styleUrls: ['./alertes-produits.component.css']
})
export class AlertesProduitsComponent implements OnInit {

  constructor() { }

  @Input() produit;
  @Output() alerte = new EventEmitter();

  ngOnInit() {
  }


}

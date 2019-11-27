import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AlertesProduitsComponent } from './alertes-produits/alertes-produits.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { PanierComponent } from './panier/panier.component';
import { LivraisonComponent } from './livraison/livraison.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListeProduitComponent,
    AlertesProduitsComponent,
    DetailsProduitComponent,
    PanierComponent,
    LivraisonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListeProduitComponent },
      {path : 'produits/:produitId', component: DetailsProduitComponent},
      {path : 'panier' , component: PanierComponent},
      {path : 'livraison' ,component : LivraisonComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

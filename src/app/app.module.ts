import { CocktailService } from './cocktail.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FavouriteComponent } from './favourite/favourite.component';

import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CardComponent,
    FavouriteComponent,
    HomeComponent,
    HistoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule


  ],

  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CocktailService } from './../cocktail.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  myFavorites: any;
  details: any;
  showCard=true;
  showModal?: boolean;
  isSelected = true;

  constructor(private cocktailService:CocktailService) { }

  ngOnInit(): void {
    this.myFavorites = localStorage.getItem('matea');
    if(this.myFavorites){
      this.myFavorites=JSON.parse(this.myFavorites);
    }
    console.log("*****", this.myFavorites);

  }

  onDetail(id:any){
    console.log(id);

    this.cocktailService.getDetails(id.idDrink)
         .subscribe((data:any)=>{
           this.details = data.drinks;
           console.log(this.details);
           this.showModal=true;

         })
  }
  onCloseModal(){
    this.details = null;
    this.showModal =false;
  }

}

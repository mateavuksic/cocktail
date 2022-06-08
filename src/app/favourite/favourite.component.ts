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
  myCocktails:any=[];
  constructor(private cocktailService:CocktailService) { }


  ngOnInit(): void {
    this.myCocktails = localStorage.getItem('matea');
    if(this.myCocktails){
      this.myCocktails=JSON.parse(this.myCocktails);
    }
    console.log("*****", this.myCocktails);

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

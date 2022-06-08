import { CocktailService } from './../cocktail.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {


  thirdCocktail:any=[];
  ingredy: any;
  newIngr:any=[];
  details:any=[];
  showModal?:boolean;
  search:any=[];
  searchTxt:any='';
  searchResults: any;
  showCard=true;
  myCocktails: any=[];
  isSelected?:boolean;
  counter:any;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("matea");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("kategorija niz", this.myCocktails);

    this.cocktailService.getIngredients()
    .subscribe((data:any)=> {

      this.thirdCocktail = data.drinks;
      for(var i =0; i<10; i++){
        this.newIngr.push(this.thirdCocktail[i]);

      }
      console.log(this.thirdCocktail);
    })

  }
  onSelect(ingr:any){
    this.cocktailService.getFilterIngredients(ingr).subscribe((data:any)=>{
      this.ingredy=data.drinks;
      this.ingredy.forEach(function (element:any) {
        element.isSelected =false;
      });

      if(this.showCard ===  false){
        this.searchResults = null;
        this.showCard = true;
        this.ingredy = data.drinks;
      }
    })
  }
  onDetail(id:any){
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
 onSearch(sr:any){
  this.cocktailService.getSearch(this.searchTxt)
         .subscribe((data:any)=>{
           console.log("fasfsasfasf", data);
          if(data && data.ingredients && this.searchTxt!=='') {
            this.searchResults = data.ingredients;


          }
          this.showCard=false;
           //this.search = data.ingredients;
           console.log(this.search);

         })
}
favoriteFunction(){
  if(localStorage.getItem('matea')!==null){
    this.ingredy.forEach((element:any) => {
      this.myCocktails.forEach((elementO:any) => {
        if(elementO.isSelected == true && elementO.idDrink == element.idDrink){
          element.isSelected=true;
          this.isSelected=element.isSelected;
        }
      });
     });
  }
}
  }




import { CocktailService } from './../cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcoholic',
  templateUrl: './alcoholic.component.html',
  styleUrls: ['./alcoholic.component.css']
})
export class AlcoholicComponent implements OnInit {
 alcoholCoctails:any=[];
  alcoholy: any;
  detai: any;
  showModal?: boolean;
  showCard=true;
  isSelected?:boolean;
  counter:any;
  myCocktails: any=[];
  newAlcohol:any=[];
  searchResult: null;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("matea");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("kategorija niz", this.myCocktails);

    this.cocktailService.getAlcoholic()
    .subscribe((data:any)=> {
      this.alcoholCoctails = data.drinks;
      for(var i =0; i<10; i++){
        this.newAlcohol.push(this.alcoholCoctails[i]);

      }
      console.log(this.alcoholCoctails)
    })

  }
  onSelect(alc:any){
    this.cocktailService.getFilterAlcoholic(alc).subscribe((data:any)=>{
      this.alcoholy=data.drinks;
      this.alcoholy.forEach(function (element:any) {
        element.isSelected =false;
    });
    console.log("cocktails",this.alcoholy);
    if(this.showCard ===  false){
      this.searchResult = null;
      this.showCard = true;
      this.alcoholy = data.drinks;
    }
    })
  }
  onDetail(id:any){
    this.cocktailService.getDetails(id.idDrink)
         .subscribe((data:any)=>{
           this.detai = data.drinks;
           console.log(this.detai);
           this.showModal=true;
         })

}
onCloseModal(){
  this.detai = null;
  this.showModal =false;
}
favoriteFunction(){
  if(localStorage.getItem('matea')!==null){
    this.alcoholy.forEach((element:any) => {
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

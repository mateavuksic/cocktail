import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  //obs;
  //result:any;
  //promise:any;
  secondCocktail :any=[];
  cocktails: any;
  newCocktail: any=[];
  detail: any=[];
  showModa?:boolean;
  searches:any=[];
  searchN: any = '';
  searchResult: any;
  showCard=true;
  myCocktails: any=[];
  isSelected?:boolean;
  counter:any;




  constructor(private cocktailService: CocktailService) {

   }

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("matea");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("kategorija niz", this.myCocktails);
    //neki tvoj servis (cocktailSerovice)
    this.cocktailService.getCategories()
    .subscribe((data:any)=> {
      this.secondCocktail = data.drinks;
      for(var i =0; i<10; i++){
        this.newCocktail.push(this.secondCocktail[i]);

      }
      console.log("SecondCocktails",this.secondCocktail);
      console.log("newCockatil", this.newCocktail);
    })



    //neku metodu getCategories "www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    //koja vraca listu kategorija
  }
  onSelect(name:any){
    this.cocktailService.getFilterCategories(name).subscribe((data:any)=>{
      this.cocktails=data.drinks;
      this.cocktails.forEach(function (element:any) {
        element.isSelected =false;
      });
      console.log("cocktails",this.cocktails);
      if(this.showCard ===  false){
        this.searchResult = null;
        this.showCard = true;
        this.cocktails = data.drinks;
      }
    })

  }
  onDetail(id:any){
    this.cocktailService.getDetails(id.idDrink)
         .subscribe((data:any)=>{
           this.detail = data.drinks;
           console.log(this.detail);
           this.showModa=true;
         })
  }
  onCloseModal(){
    this.detail = null;
    this.showModa =false;
  }
  onSearchName(nm:any){
    this.cocktailService.getSearchName(this.searchN)
           .subscribe((data:any)=>{
             console.log("fasfsasfasf", data);
            if(data && data.drinks && this.searchN!=='') {
              this.searchResult = data.drinks;


            }
             //this.search = data.ingredients;
             this.showCard=false;
             console.log(this.searches);

           })

          }
          favoriteFunction(){
            if(localStorage.getItem('matea')!==null){
              this.cocktails.forEach((element:any) => {
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

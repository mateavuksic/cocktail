import { Component, Input, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  thirdCocktail:any=[];
  ingredy: any;
  newIngr:any=[];
  details:any=[];
  showModal?:boolean;
  search:any=[];
  searchTxt:any='';
  searchResults: any;
  @Input() data:any;
  @Input() showCard?:boolean;



  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
console.log("ksakagflotfe",this.data);
  }
  onSelect(ingr:any){
    this.cocktailService.getFilterIngredients(ingr).subscribe((data:any)=>{
      this.ingredy=data.drinks;
    })
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




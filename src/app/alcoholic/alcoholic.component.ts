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
  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getAlcoholic()
    .subscribe((data:any)=> {
      this.alcoholCoctails = data.drinks;
      console.log(this.alcoholCoctails)
    })

  }
  onSelect(alc:any){
    this.cocktailService.getFilterAlcoholic(alc).subscribe((data:any)=>{
      this.alcoholy=data.drinks;
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
}

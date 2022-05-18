import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'cocktail';
  showSearch!:boolean;

  search: any;
  constructor(private cocktailService: CocktailService) {}


  toggleSearch() {
    this.showSearch=true;
  }

  noSearch(){
    this.showSearch=false;
  }
  // onSearch(sr:any){
  //   this.cocktailService.getDetails(sr.strIngredient)
  //          .subscribe((data:any)=>{
  //            this.search = data.ingredients;
  //            console.log(this.search);

  //          })
  //         }

        }

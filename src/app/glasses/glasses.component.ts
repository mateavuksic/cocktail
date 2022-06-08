import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit {
  glassesCocktail :any=[];
  glassy: any;
  newGlass:any=[];
  showMod?: boolean;
  deta: any=[];
  showCard=true;
  myCocktails: any=[];
  isSelected?:boolean;
  counter:any;
  searchResult: null;


  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.myCocktails = localStorage.getItem("matea");
    this.myCocktails = JSON.parse(this.myCocktails);
    console.log("kategorija niz", this.myCocktails);

    this.cocktailService.getGlasses()
    .subscribe((data:any)=> {
      this. glassesCocktail = data.drinks;
      for(var i =0; i<10; i++){
        this.newGlass.push(this.glassesCocktail[i]);

      }
      console.log(this. glassesCocktail)
    })

  }
  onSelect(gl:any){
    this.cocktailService.getFilterGlasses(gl).subscribe((data:any)=>{
      this.glassy=data.drinks;
      this.glassy.forEach(function (element:any) {
        element.isSelected =false;
    });
    console.log("cocktails",this.glassy);
    if(this.showCard ===  false){
      this.searchResult = null;
      this.showCard = true;
      this.glassy = data.drinks;
    }
  })


  }
  onDetail(id:any){
    this.cocktailService.getDetails(id.idDrink)
         .subscribe((data:any)=>{
           this.deta = data.drinks;
           console.log(this.deta);
           this.showMod=true;
         })
 }
onCloseModal(){
  this.deta = null;
  this.showMod =false;
  }
  favoriteFunction(){
    if(localStorage.getItem('matea')!==null){
      this.glassy.forEach((element:any) => {
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

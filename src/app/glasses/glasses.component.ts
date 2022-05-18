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

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
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
}

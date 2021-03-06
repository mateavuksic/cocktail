import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CocktailService } from '../cocktail.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  myItem?:any;

  thirdCocktail:any=[];
  ingredy: any;
  newIngr:any=[];
  details:any=[];
  showModal?:boolean;
  search:any=[];
  searchTxt:any='';
  searchResults: any;
  @Input() isSelected?:boolean;
  @Input() data:any;
  @Input() showCard?:boolean;


 btnvar:any = document.getElementById('btnh');
 favArray:any=[];
  favorite: any= document.getElementsByClassName("fa fa-heart")[0];
  @Output() favoriteEvent:EventEmitter<any> = new EventEmitter<any>();
//  button:any = document.querySelector(".heart-like-button");

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
console.log("ksakagflotfe",this.data);
this.favoriteEvent.emit(this.favorite);
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

  Toggle(id:any){
    if(localStorage.getItem('matea')===null){
      console.log("storage is empty");
      this.favArray = [];
      this.favArray.push(this.data);
      this.data.isSelected=true;
      this.isSelected=true;
    }else{
      console.log("storage is not empty");
      this.favArray = localStorage.getItem('matea');
      this.favArray = JSON.parse(this.favArray);
      let elIndex = this.favArray.findIndex((element:any) => element.idDrink == id);
      if(elIndex!= -1){
        this.favArray.splice(elIndex, 1);
        this.data.isSelected=false;
        this.isSelected=false;
      }else{
        this.favArray.push(this.data);
        this.data.isSelected=true;
        this.isSelected=true;
        // this.counter++;

      }

   }
    localStorage.setItem('matea', JSON.stringify(this.favArray));
  }

//     this.myItem = localStorage.getItem('matea');
//     let favorite: any= document.getElementsByClassName("fa fa-heart")[0];
// this.data.isSelected=false;
//     if(this.myItem){
//       this.data.isSelected = true;
//       this.myItem=JSON.parse(this.myItem);
//       this.isSelected = !this.isSelected;
//       let elIndex = this.myItem.findIndex((element:any) => element.idDrink == id);
//       if(elIndex != -1){
//         this.myItem.splice(elIndex, 1);
//       } else {
//         this.myItem.push(this.data);
//       }
//     }

//     if(!this.myItem){
//       this.myItem=[];
//     }
  //   if (this.btnvar.style.color =="red") {
  //     this.btnvar.style.color = "grey"
  // }
  // else{
  //     this.btnvar.style.color = "red"
  // }

  //this.myItem.push(this.data);
  // localStorage.setItem('matea',JSON.stringify(this.myItem));
//   if(this.btnvar.style.color =="red"){
//     this.btnvar.style.color = "grey"
//     }
//   else{
//          this.btnvar.style.color = "red"
//        }
// }
//     this.button.addEventListener("click", () => {
//   if (this.button.classList.contains("liked")) {
//     this.button.classList.remove("liked");
//   } else {
//     this.button.classList.add("liked");
//   }
// });
 }


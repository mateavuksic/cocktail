import { FavouriteComponent } from './favourite/favourite.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component'
import { IngredientsComponent } from './ingredients/ingredients.component';
import { GlassesComponent } from './glasses/glasses.component';
import { AlcoholicComponent } from './alcoholic/alcoholic.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: '/homes', pathMatch: 'full' },
  {path:'homes', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'alcoholic' , component: AlcoholicComponent},
  {path: 'glasses', component: GlassesComponent},
  {path: 'ingredients', component:IngredientsComponent},
  {path: 'favourites', component:FavouriteComponent},
  {path: 'history', component:HistoryComponent},
  {path:'**',component:HomeComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AlcoholicComponent,GlassesComponent,CategoriesComponent,IngredientsComponent, FavouriteComponent];

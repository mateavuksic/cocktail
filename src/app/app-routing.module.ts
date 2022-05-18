
import { IngredientsComponent } from './ingredients/ingredients.component';
import { GlassesComponent } from './glasses/glasses.component';
import { AlcoholicComponent } from './alcoholic/alcoholic.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'alcoholic' , component: AlcoholicComponent},
  {path: 'glasses', component: GlassesComponent},
  {path: 'ingredients', component:IngredientsComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AlcoholicComponent,GlassesComponent,CategoriesComponent,IngredientsComponent];

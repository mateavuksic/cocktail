import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CocktailService {

constructor(private http: HttpClient) { }
  getCategories():any{
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
  }
    getIngredients():any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
    }
    getAlcoholic():any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list");
    }
    getGlasses():any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
    }
     getFilterCategories(name:any):any{
       return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + name);

    }
    getFilterAlcoholic(alc:any):any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + alc);
    }
    getFilterIngredients(ingr:any):any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingr);
    }
    getFilterGlasses(gl:any):any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + gl);
    }
    getDetails(id:any):any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +id);
    }
     getSearch(sr:any):any{
      return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +sr);
    }
     getSearchName(nm:any):any{
       return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +nm)
    }
}

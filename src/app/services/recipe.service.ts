import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IRecipe } from '../models/recipe.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly apiUrl = `${environment.api}/recipes`;

  constructor(private http: HttpClient) {}

  public getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.apiUrl).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  public postRecipes(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(this.apiUrl, recipe, httpOptions).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}

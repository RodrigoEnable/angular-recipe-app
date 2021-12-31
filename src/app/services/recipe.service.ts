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

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.apiUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  postRecipes(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post<IRecipe>(this.apiUrl, recipe, httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Um erro ocorreu: ${err.error.message}`;
    } else {
      errorMessage = `O servidor retornou o código ${err.status}, a mensagem de erro é ${err.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}

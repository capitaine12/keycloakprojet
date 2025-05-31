// src/app/cosmos-x-docs/services/cours.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours } from '../model/cours.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:8000/api/cours'; // Assurez-vous que le backend écoute bien sur cette URL

  constructor(private http: HttpClient) {}

  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.apiUrl);
  }
}

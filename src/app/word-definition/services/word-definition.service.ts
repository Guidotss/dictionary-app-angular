import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({ providedIn: 'root' })
export class WordDefinitionService {
  constructor(private readonly http: HttpClient) {}

  searchWord(value: string) {
    return this.http.get(`${environment.apiUrl}${value}`);
  }
}

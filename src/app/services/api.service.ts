import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com';

  getEmployees(): Observable<any> {
    return this.http.get(`${this.url}/users`);
  }
}

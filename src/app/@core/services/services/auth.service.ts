import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/User/authenticate`, data).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }
}

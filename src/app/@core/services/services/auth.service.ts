import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token')
    if (token) {
      return true
    } else {
      this.router.navigate(['/auth'])
      return false
    }
  }

  login(data: { username: string; password: string }): any {
    if (data.username == 'admin' && data.password == 'admin') return true
    return false
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  token: string | null = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  signupUser(email: string, password: string) {
    // Not implemented yet
  }

  signinUser(email: string, password: string) {
    const url = 'http://localhost:3000/api/v1/auth/login';
    const body = { email, password };

    this.http.post<any>(url, body).subscribe({
      next: (response) => {
        const token = response?.data?.accessToken;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', this.token);
          // Opcionalmente guardar la info del usuario
          if (response.data.user) {
            localStorage.setItem('userData', JSON.stringify(response.data.user));
          }
          if (this.activatedRoute.snapshot.queryParams['returnUrl']) {
            this.router.navigate([this.activatedRoute.snapshot.queryParams['returnUrl']]);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          console.error('Token not found in response', response);
        }
      },
      error: (error) => {
        console.error('Login error', error);
      }
    });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('currentUser');
  }

  isAuthenticated() {
    return localStorage.getItem('currentUser');
  }
}

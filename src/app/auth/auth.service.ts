export class AuthService {

  static getToken(): string {
    return localStorage.getItem('token');
  }

  static setToken(token: string): string {
    return localStorage.setItem('token', token);
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService
      .logout()
      .then(() => {
        console.log('Sesión cerrada');
        // Redirige al usuario a la página de inicio de sesión
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}

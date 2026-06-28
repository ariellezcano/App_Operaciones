import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';

  mostrarPassword: boolean = false;

  cargando: boolean = false;

  constructor(private router: Router) { }

  login(): void {

    if (!this.usuario || !this.password) {
      alert('Debe completar todos los campos.');
      return;
    }

    this.cargando = true;

    setTimeout(() => {

      if (
        this.usuario === 'Operaciones' &&
        this.password === 'operaciones2026'
      ) {

        // Guardar sesión (opcional)
        localStorage.setItem('logueado', 'true');
        localStorage.setItem('usuario', this.usuario);

        // Redireccionar al panel principal
        //this.router.navigate(['/pages/principal']);
        this.router.navigate(['/pages/principal']).then(ok => {
          console.log('Navegó:', ok);
        });


      } else {

        alert('Usuario o contraseña incorrectos.');

      }

      this.cargando = false;

    }, 800);

  }

  verPassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

}
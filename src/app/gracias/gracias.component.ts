import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gracias',
  standalone: true,
  imports: [],
  templateUrl: './gracias.component.html',
  styleUrl: './gracias.component.css'
})
export class GraciasComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Opcional: Redirigir a la página del formulario si se trata de un acceso no autorizado
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (!formSubmitted) {
      this.router.navigate(['/cuestionario2']);
    }
  }

}

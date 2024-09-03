import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cuestionario2Component } from './cuestionario2/cuestionario2.component';
import { GraciasComponent } from './gracias/gracias.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


export const routes: Routes = [
  { path: 'cuestionario', component: Cuestionario2Component },
  { path: 'gracias', component: GraciasComponent },
  { path: '', redirectTo: '/cuestionario', pathMatch: 'full' }, // Redirige a cuestionario por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes),TooltipModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export class AppModule {}



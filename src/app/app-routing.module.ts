import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// importe el componente creado llamado catalogo
import { CatologoComponent } from './components/catologo/catologo.component';
import { AboutComponent } from './components/about/about.component';

// en el array routes incluir el objeto como esta definido a continuacion
const routes: Routes = [
  {
    path: 'catalogo',
    component: CatologoComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
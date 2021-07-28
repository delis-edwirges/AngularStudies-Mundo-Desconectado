import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'', redirecTo 'entrar',patMatch 'full'},
  // {path: 'entrar', component: EntrarComponent},
  // {path: 'cadastrar', component: CadastrarComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

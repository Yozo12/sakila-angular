import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorComponent } from './component/actor/actor.component';
import { FilmComponent } from './component/film/film.component';



const routes: Routes = [
  {
    path:'',
    component:ActorComponent
  },
  {
    path:'film/:actorid',
    component:FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

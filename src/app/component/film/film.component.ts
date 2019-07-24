import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/service/cinema.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Film } from 'src/app/model/Film';
import { Actor } from 'src/app/model/Actor';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film: Film[];
 
  paramActor: number;
  actorOne: Actor;
  constructor(private filmService: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.film = [];
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.paramActor = parseInt(params.get('actorid'));
      this.actor();
      this.allFilmByActor();
    });
   
    


  }
  actor() {
    this.filmService.actor(this.paramActor).subscribe((res) => {
      this.actorOne = res.body as Actor;
    });

  }

  allFilmByActor() {
    this.filmService.allFilm(this.paramActor).subscribe((res) => {
      this.film = res.body as Film[];
    });
  }

}

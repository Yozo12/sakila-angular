import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/service/cinema.service';
import { Actor } from 'src/app/model/Actor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: Actor[];
 
  constructor(private cinemaService: CinemaService,private router:Router) { }

  ngOnInit() {
    this.actor = [];
    this.showAllActor();
  }
  showAllActor() {
    this.cinemaService.allActor().subscribe((res) => {
      this.actor = res.body as Actor[];
    });
  }

  goToFilm(codeActor:number){
    this.router.navigate(['film',codeActor]);

  }
}



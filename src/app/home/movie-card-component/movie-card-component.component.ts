import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card-component.component.html',
  styleUrls: ['./movie-card-component.component.css']
})
export class MovieCardComponentComponent implements OnInit {

  @Input() movie: Movie = new Movie();
  @Output() editButtonClicked = new EventEmitter<Number>();
  @Output() moviesUpdated = new EventEmitter<Number>();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  openForm(id: Number){
    this.editButtonClicked.emit(id);
  }

  deleteMovie(id: Number){
    if(!confirm('Are you sure you want to delete this movie?'))
      return;
    this.movieService.delete(id).subscribe(res => this.moviesUpdated.emit());
  }

}

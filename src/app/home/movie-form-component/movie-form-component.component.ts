import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-movie-form-component',
  templateUrl: './movie-form-component.component.html',
  styleUrls: ['./movie-form-component.component.css']
})
export class MovieFormComponentComponent implements OnInit {

  @Input() isShown: boolean = false;
  @Input() movieId: Number = 0;
  @Output() formClosed = new EventEmitter() ;
  @Output() moviesUpdated = new EventEmitter() ;

  public movieToEdit?: Movie;

  movieForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    rating: new FormControl(0),
    posterUrl: new FormControl(''),
    trailerUrl: new FormControl('')
  })
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.fillForm(); 
  }

  closeForm(){
    this.formClosed.emit();
  }

  save(){
    if(this.movieId) // We have a movie to upate
    {
      this.movieService.update(this.movieForm.value).subscribe(res => {
        this.formClosed.emit();
        this.moviesUpdated.emit();
      });
    }
    else // There is no movie to upate, so we create a new one
    {
      this.movieService.create(this.movieForm.value).subscribe(res => {
        this.formClosed.emit();
        this.moviesUpdated.emit();
      });
    }
  }

  fillForm(){
    if(!this.movieId){
      this.movieForm = new FormGroup({
        id: new FormControl(0),
        title: new FormControl(''),
        description: new FormControl(''),
        rating: new FormControl(0),
        posterUrl: new FormControl(''),
        trailerUrl: new FormControl('')
      });
      return;
    }
    this.movieService.getById(this.movieId).subscribe(res => {
      this.movieToEdit = res.data;
      this.movieForm = new FormGroup({
        id: new FormControl(this.movieToEdit?.id),
        title: new FormControl(this.movieToEdit?.title),
        description: new FormControl(this.movieToEdit?.description),
        rating: new FormControl(this.movieToEdit?.rating),
        posterUrl: new FormControl(this.movieToEdit?.posterUrl),
        trailerUrl: new FormControl(this.movieToEdit?.trailerUrl)
      });
    });
  }

}

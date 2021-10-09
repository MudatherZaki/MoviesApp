import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public isFormOpen: boolean = false;
  public movieToEditId: Number = 0;
  @Inject(DOCUMENT) private doc?: Document

  constructor(private movieService: MovieService, public auth: AuthService, public router: Router) { }

  ngOnInit(): void {


    setTimeout(() => {
      this.auth.isAuthenticated$.subscribe(isAuthenticated => {
        if(!isAuthenticated)
          this.router.navigate(['login']);
      });
      this.auth.getAccessTokenSilently().subscribe(token => 
        {
          localStorage["token"] = token;
  
          this.movieService.getAll().subscribe(res =>{ 
            this.movies = res.data;
          });
        });
    }, 1000);
  }

  openForm(e: Number){
    this.isFormOpen = true;
    this.movieToEditId = e;
  }

  closeForm(){
    this.isFormOpen = false;
  }

  logout(){
    localStorage.removeItem('token');
    this.auth.logout({ returnTo: this.doc?.location.origin });
  }

}

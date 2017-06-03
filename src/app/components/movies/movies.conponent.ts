import {Component} from 'angular2/core';

@Component({
  selector: 'movies',
  templateUrl: 'app/components/movies/movies.vue.html',
  styleUrls: ['app/components/movies/movies.style.css']
    })
export class Movies {
    
    moviesList= [];
    
    addMovies(movieTitle){
        this.moviesList.push(movieTitle);
    }

}
import {Component} from 'angular2/core';
import {Movies} from '../movies/movies.conponent';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [Movies],
  pipes: []
})
export class Home {

  constructor() {}

}

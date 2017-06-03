import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


import {Home} from './components/home/home';


@Component({
  selector: 'seed-app',
  providers: [],
  templateUrl: 'app/seed-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true})
])
export class SeedApp {

  constructor() {}

}

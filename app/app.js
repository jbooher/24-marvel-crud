import 'es6-promise';
import 'whatwg-fetch';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import teams from './modules/teams';

let App = angular.module('app', ['ui.router', 'tiy.teams']);

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);

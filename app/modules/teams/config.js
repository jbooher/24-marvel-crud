function config($stateProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'IndexController as indexCtrl',
      template: require('./views/index.html')
    })
    .state('teams', {
      url: '/teams',
      controller: 'TeamsController as teamsCtrl',
      template: require('./views/teams.html')
    })
    .state('new_team', {
      url: '/teams/new',
      controller: 'NewTeamController as newCtrl',
      template: require('./views/new_team.html')
    })
    .state('edit_team', {
      url: '/teams/:id/edit',
      controller: 'EditTeamController as editCtrl',
      template: require('./views/edit_team.html')
    })
    .state('team', {
      url: '/teams/:id',
      controller: 'TeamController as teamCtrl',
      template: require('./views/team.html')
    });
}

export default config;

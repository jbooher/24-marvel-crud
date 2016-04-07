function config($stateProvider) {
  $stateProvider
    .state('teams', {
      url: '/',
      controller: 'TeamsController as teamsCtrl',
      template: require('./views/teams.html')
    })
    .state('new_team', {
      url: '/new',
      controller: 'NewTeamController as newCtrl',
      template: require('./views/new_team.html')
    })
    .state('edit_team', {
      url: '/:id/edit',
      controller: 'EditTeamController as editCtrl',
      template: require('./views/edit_team.html')
    })
    .state('team', {
      url: '/:id',
      controller: 'TeamController as teamCtrl',
      template: require('./views/team.html')
    });
}

export default config;

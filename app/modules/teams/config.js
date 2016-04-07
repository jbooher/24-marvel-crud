/*
  Teams Module Configuration Function
  -----------------------------------

  STEP 1: Use $stateProvider.state to add a route called
          teams that points to /

          It should use the TeamsController and call it teamsCtrl.

          It should use the ./view/teams.html template.

  STEP 2: Use $stateProvider.state to add a route called
          new_team that points to /new

          It should use the NewTeamController and call it newCtrl.

          It should use the ./view/new_team.html template.

  STEP 3: Use $stateProvider.state to add a route called
          edit_team that points to /:id/edit

          It should use the EditTeamController and call it editCtrl.

          It should use the ./view/edit_team.html template.

  STEP 4: Use $stateProvider.state to add a route called
          team that points to /:id

          It should use the TeamController and call it teamCtrl.

          It should use the ./view/team.html template.


*/

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

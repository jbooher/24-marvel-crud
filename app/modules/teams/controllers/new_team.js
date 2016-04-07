/*
  New Team Controller
  -------------------

  STEP 1: Create variables to store name and creator. They should
          default to empty strings.

  STEP 2: In createTeam(), use $http to post to https://teams.mybluemix.net/api/teams

          You should send name and creator. The values to those should be the
          variables you setup in STEP 1.

  STEP 3: In your .then from STEP 2, use $state.go to redirect the user
          to the edit_team route. Pass in the id you get back in your response
          so that it redirects to the right team.

*/

class NewTeamController {
  constructor($http, $state) {
    this._$http = $http;
    this._$state = $state;
    this.name = "";
    this.creator = "";
  }

  createTeam() {
    console.log("posting");
    this._$http
      .post(`https://teams.mybluemix.net/api/teams`, {
        "name": this.name,
        "creator": this.creator
      })
      .then((response) =>{
        this._$state.go('edit_team', { id: response.data.id });
      });
  }
}

export default NewTeamController;

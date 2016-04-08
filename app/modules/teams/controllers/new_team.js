class NewTeamController {
  constructor($http, $state) {
    this._$http = $http;
    this._$state = $state;
    this.creator = JSON.parse(localStorage.getItem('name'));
    this.name = "";
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

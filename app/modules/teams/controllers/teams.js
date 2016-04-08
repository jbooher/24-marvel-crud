class TeamsController {

	constructor($http) {
    this._$http = $http;
    this.getData();
	}

  getData() {
    this._$http
      .get(`https://teams.mybluemix.net/api/teams`)
      .then((response) => {
        this.teams = response.data;
      });
  }

}

export default TeamsController

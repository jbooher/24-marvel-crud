class TeamController {

	constructor($http, $stateParams) {
    this._$http = $http;
    this.id = $stateParams.id;
		this.heroes = [];

    this.getData();
	}

  getData() {
		this._$http
			.get(`https://teams.mybluemix.net/api/teams/${this.id}`)
			.then((response) => {
				this.team = response.data;
		});

		this._$http
			.get(`https://teams.mybluemix.net/api/heroes?filter[where][team_id]=${this.id}`)
			.then((response) => {
				this.heroes = response.data;
			})
  }

}

export default TeamController;

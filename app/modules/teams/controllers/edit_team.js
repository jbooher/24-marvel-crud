class EditTeamController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.id = $stateParams.id;
		this.heroes = [];
		this.previewName = "";
		this.name = "";

    this.getData();
	}

  getData() {
		this._$http
			.get(`https://teams.mybluemix.net/api/teams/${this.id}`)
			.then((response) => {
				console.log(response);
				this.team = response.data;
			});

		this._$http
			.get(`https://teams.mybluemix.net/api/heroes?filter[where][team_id]=${this.id}`)
			.then((response) => {
				console.log(response);
				this.heroes = response.data;
				console.log(this.heroes);
			});
  }

	previewCharacter() {
			this._$http
				.get(`http://gateway.marvel.com:80/v1/public/characters?name=${this.name}&apikey=6e7bd33438a14b84d91097cd3cfc46b5`)
				.then((response) => {
					console.log(response);
					this.hero = response.data.data.results[0];
					if(this.validateAdd(this.hero)) {
						this.previewName = this.hero.name;
						this.previewDesc = this.hero.description;
						this.previewImage = `${this.hero.thumbnail.path}.${this.hero.thumbnail.extension}`;
					}
			}).catch((error) => {
				console.log(`Error: ${error}`);
				alert(`Could not find that hero: ${this.name}`);
			});
	}

	previewRemove() {
		this.previewName = "";
		this.name = "";
	}

  addCharacter() {
		this.previewName = "";
		this.name = "";

		this._$http
			.post(`https://teams.mybluemix.net/api/heroes`, {
				"name": this.hero.name,
				"marvel_id": this.hero.id,
				"description": this.hero.description,
				"team_id": this.id,
				"image": `${this.hero.thumbnail.path}.${this.hero.thumbnail.extension}`
			})
			.then((response) => {
				this.heroes.push(response.data);
			})

  }

  deleteCharacter(hero) {
		let confirmed = confirm(`Are you sure you want to delete: ${hero.name}`);

		if(confirmed){
			this._$http
				.delete(`https://teams.mybluemix.net/api/heroes/${hero.id}`)
				.then((response) => {
					this.heroes.splice(this.heroes.indexOf(hero), 1);
				});
		}
  }

	validateAdd(char){
		let valid = true

		this.heroes.forEach((hero) => {

			if (hero.name === char.name) {
				alert("You have already added that character");
				valid = false;
			}
		});

		return valid;
	}

}

export default EditTeamController

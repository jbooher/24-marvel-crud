class IndexController {
  constructor($state) {
    this.name = "";
    this._$state = $state;
  }

  getName() {
    localStorage.setItem('name', JSON.stringify(this.name));
    this.name = "";

    this._$state.go('teams');
  }
}

export default IndexController;

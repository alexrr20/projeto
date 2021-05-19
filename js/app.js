import signupView from "./views/signupView.js";

class App {
	constructor() {
		this.routes = {
			"": [],
			signup: [signupView],
		};

		// import dummy data for testing purposes
		this.#importDataFixtures();
	}
}

new App();

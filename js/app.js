import userView from "./views/userView.js";
import loginView from "./views/loginView.js";

class App {
	constructor() {
		// Mapeamento entre os ficheiros HTML e as views que estes vão carregar
		this.routes = {
			"": [userView],
			index: [userView],
			login: [loginView],
			signup: [userView],
		};

		// importa dados dummy para testes
		this.#importDataFixtures();

		// instancia as views mapeadas no objeto routes
		this.#instantiateViews();
	}

	#instantiateViews() {
		const path = window.location.pathname;
		const file = path.substr(path.lastIndexOf("/") + 1);
		const route = file.split(".")[0];

		const views = this.#getViews(route);

		for (const view of views) {
			new view();
		}
	}

	#getViews(route) {
		return typeof this.routes[route] === "undefined"
			? []
			: this.routes[route];
	}

	#importDataFixtures() {
		const users = [
			{
				id: 1,
				usersName: "usersName1",
				dob: "dob1",
				nif: "nif1",
				city: "city1",
				gender: "gender1",
				email: "email1",
				phone: "phone1",
				password: "password1",
			},
			{
				id: 2,
				usersName: "usersName2",
				dob: "dob2",
				nif: "nif2",
				city: "city2",
				gender: "gender2",
				email: "email2",
				phone: "phone2",
				password: "password2",
			},
		];

		// Load the fixtures in case there is no data in the local storage
		if (!localStorage.users) {
			localStorage.setItem("users", JSON.stringify(users));
		}
	}
}

new App();

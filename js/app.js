import registerView from "./views/registerView.js";
import loginView from "./views/loginView.js";
import navView from "./views/navView.js";
import testCentersView from "./views/testCentersView.js";
import newAppointmentView from "./views/newAppointmentView.js";
import faqView from "./views/faqView.js";
import indexView from "./views/indexView.js";
import adminView from "./views/adminView.js";

class App {
	constructor() {
		// Mapeamento entre os ficheiros HTML e as views que estes vão carregar
		this.routes = {
			"": [navView],
			index: [navView, indexView],
			login: [loginView, navView],
			signup: [registerView, navView],
			postos: [testCentersView, navView],
			faq: [navView, faqView],
			info: [navView],
			marcacao: [navView, newAppointmentView],
			validacao: [navView],
			admin: [adminView],
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
				id: 0,
				usersName: "usersName1",
				dob: "2000-09-20",
				nif: "111111",
				city: "city1",
				gender: "gender1",
				email: "email1",
				phone: "99999999",
				password: "password1",
				likes: [],
			},
			{
				id: 1,
				usersName: "usersName2",
				dob: "2003-02-02",
				nif: "222222",
				city: "city2",
				gender: "gender2",
				email: "email2",
				phone: "88888888",
				password: "password2",
				likes: [],
			},
		];

		const testCenters = [
			{
				id: 0,
				testCenterName: "testCenterName1",
				address: "address1",
				contact: {
					email: "email1",
					phone: "phone1",
				},
				website: "website1",
				availableTests: {
					rapido: true,
					pcr: false,
					serologico: true,
					anticorpos: false,
				},
				openHours: "24h",
				likes: 9,
				rating: 4,
				comments: [
					{
						userComment: "userComment1",
						comment: "comment1",
						userRating: 4,
					},
				],
			},

			{
				id: 1,
				testCenterName: "testCenterName2",
				address: "address2",
				contact: {
					email: "email2",
					phone: "phone2",
				},
				website: "website2",
				availableTests: {
					rapido: true,
					pcr: true,
					serologico: true,
					anticorpos: false,
				},
				openHours: "24h",
				likes: 53,
				rating: 5,
				comments: [
					{
						userComment: "userComment2",
						comment: "comment2",
						userRating: 4,
					},
				],
			},
		];

		// Load the fixtures in case there is no data in the local storage
		if (!localStorage.users) {
			localStorage.setItem("users", JSON.stringify(users));
		}

		// Load the fixtures in case there is no data in the local storage
		if (!localStorage.testCenters) {
			localStorage.setItem("testCenters", JSON.stringify(testCenters));
		}
	}
}

new App();

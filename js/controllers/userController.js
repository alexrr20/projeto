import userModel from "../models/userModel.js";

export default class userController {
	constructor() {
		this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
	}

	register(usersName, dob, nif, city, gender, email, phone, password) {
		if (this.users.find((user) => user.email === email)) {
			throw Error(`Utilizador com o email "${email}" já existe!`);
		} else {
			const newId =
				this.users.length > 0
					? this.users[this.users.length - 1].id + 1
					: 1;
			this.users.push(
				new userModel(
					newId,
					usersName,
					dob,
					nif,
					city,
					gender,
					email,
					phone,
					password
				)
			);
			localStorage.setItem("users", JSON.stringify(this.users));
		}
	}

	login(email, password, check) {
		if (
			this.users.some(
				(user) => user.email === email && user.password === password
			)
		) {
			check.checked
				? localStorage.setItem("loggedUser", email)
				: sessionStorage.setItem("loggedUser", email);
			return true;
		} else {
			throw Error("Invalid login!", "orange");
		}
	}

	logout() {
		sessionStorage.removeItem("loggedUser");
	}

	isLogged() {
		return sessionStorage.getItem("loggedUser") !== null ? true : false;
	}
}

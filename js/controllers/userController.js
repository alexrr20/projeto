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
			throw Error("Login inválido!", "orange");
		}
	}

	logout() {
		sessionStorage.getItem("loggedUser") !== null
			? sessionStorage.removeItem("loggedUser")
			: localStorage.removeItem("loggedUser");
	}

	isLogged() {
		return sessionStorage.getItem("loggedUser") !== null ||
			localStorage.getItem("loggedUser") !== null
			? true
			: false;
	}

	getUserInfo(email) {
		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].email === email) {
				return this.users[i];
			}
		}
	}

	getLoggedUser() {
		return sessionStorage.getItem("loggedUser") !== null
			? sessionStorage.getItem("loggedUser")
			: localStorage.getItem("loggedUser") !== null
			? localStorage.getItem("loggedUser")
			: false;
	}

	checkLike(testCenterId) {
		let userLoggedInfo = this.getUserInfo(this.getLoggedUser());
		if (!userLoggedInfo.likes.includes(testCenterId)) {
			return false;
		} else {
			return true;
		}
	}

	addLike(id) {
		let userLoggedInfo = this.getUserInfo(this.getLoggedUser());
		console.log(this.checkLike(id));
		if (this.checkLike(id) === false) {
			userLoggedInfo.likes.push(id);
			this.users[userLoggedInfo.id].likes = userLoggedInfo.likes;
			localStorage.setItem("users", JSON.stringify(this.users));
		} else {
			let index = userLoggedInfo.likes.indexOf(id);
			userLoggedInfo.likes.splice(index, 1);
			this.users[userLoggedInfo.id].likes = userLoggedInfo.likes;
			localStorage.setItem("users", JSON.stringify(this.users));
		}
	}
}

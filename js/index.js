let body = document.getElementsByTagName("body")[0];
let burger = document.querySelectorAll(".burger")[0];
let nav = document.querySelectorAll("#navbar")[0];

// PÁGINA FAQ
if (body.classList.contains("faqBody")) {
	let btnSubmit = document.querySelectorAll(".btnSubmit");
	let btnRemove = document.querySelectorAll(".btnRemove");
	let btnTheme = document.querySelectorAll(".btnTheme");
	let imgLogo = document.querySelectorAll("#logo");
	let acc = document.getElementsByClassName("accordion");

	btnTheme[0].addEventListener("click", () => {
		body.classList.toggle("dark");
		imgLogo[0].src = "media/logo.svg";
	});

	/* EVENT LISTENER onmousedown E onmouseup NÃO FUNCIONAVAM*/
	function mouseDown() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "hidden";
	}

	function mouseUp() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "visible";
	}

	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");

			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}

	btnSubmit[0].addEventListener("click", function () {
		let lsUser = JSON.parse(localStorage.getItem("User"));
		let inpUser = document.querySelectorAll(".inpUser");
		let userAdd = inpUser[0].value;
		let newUser = new User(userAdd);

		console.log(newUser);

		if (!lsUser) {
			let arrayAdd = [newUser];
			console.log(arrayAdd);
			localStorage.setItem("User", JSON.stringify(arrayAdd));
		} else {
			lsUser.push(newUser);
			console.log(JSON.stringify(lsUser));
			localStorage.setItem("User", JSON.stringify(lsUser));
		}
	});

	btnRemove[0].addEventListener("click", function () {
		let lsUser = JSON.parse(localStorage.getItem("User"));

		if (!lsUser) {
			alert("Esta conta não existe! Tente de novo");
			return;
		}

		let inpUser = document.querySelectorAll(".inpUser");
		let userRemove = inpUser[0].value;
		let indexRemove = function () {
			for (let i = 0; i < lsUser.length; i++) {
				if (lsUser[i].username == userRemove) {
					return i;
				}
			}
			return -1;
		};

		lsUser.splice(indexRemove, 1);
		if (!userRemove.length || indexRemove == -1) {
			alert("Esta conta não existe! Tente de novo");
			return;
		} else if (!lsUser.length) {
			localStorage.removeItem("User");
		} else {
			localStorage.setItem("User", JSON.stringify(lsUser));
		}
	});

	btnRemove[1].addEventListener("click", function () {
		localStorage.removeItem("User");
	});

	btnSubmit[2].addEventListener("click", function () {
		if (!localStorage.getItem("Logged In")) {
			let lsUser = JSON.parse(localStorage.getItem("User"));
			let inpUser = document.querySelectorAll(".inpUser");
			let userLogin = inpUser[0].value;

			for (let i = 0; i < lsUser.length; i++) {
				if (lsUser[i].username == userLogin) {
					localStorage.setItem(
						"Logged In",
						JSON.stringify(lsUser[i])
					);
				}
			}
			btnSubmit[2].textContent = "LOGOUT";
		} else {
			localStorage.removeItem("Logged In");
			btnSubmit[2].textContent = "LOGIN";
		}
	});

	let myChart = document.getElementById("myChart").getContext("2d");

	Chart.defaults.font.family = "Azo Sans";
	Chart.defaults.font.size = 16;

	let barChart = new Chart(myChart, {
		type: "bar",
		data: {
			labels: ["Teste1", "Teste2", "Teste3"],
			datasets: [
				{
					label: "Population",
					data: [3, 5, 1],
				},
			],
		},
		options: {},
	});
}

// PÁGINA INICIO
if (body.classList.contains("inicioBody")) {
	let dropdown = document.querySelectorAll(".dropdown");
	let dropdown2 = document.querySelectorAll(".dropdown2");
	let dropdown3 = document.querySelectorAll(".dropdown3");
	let input = document.querySelectorAll(".search-item");
	let burger = document.querySelectorAll(".burger")[0];
	let nav = document.querySelectorAll("#navbar")[0];
	let btnTheme = document.querySelectorAll(".btnTheme");
	let dropdownList = document.querySelectorAll(".dropdownList");
	let inp = document.querySelectorAll("input");

	input[0].addEventListener("focus", () => {
		dropdown[0].classList.replace("hidden", "shown");
	});

	input[0].addEventListener("focusout", () => {
		setTimeout(function () {
			dropdown[0].classList.replace("shown", "hidden");
		}, 100);
	});

	for (let i = 0; i < dropdownList[0].childNodes.length; i++) {
		if (dropdownList[0].childNodes[i].nodeName == "LI") {
			dropdownList[0].childNodes[i].addEventListener("click", () => {
				inp[0].value =
					dropdownList[0].childNodes[i].childNodes[1].innerHTML;
			});
		}
	}

	input[1].addEventListener("focus", () => {
		dropdown2[0].classList.replace("hidden", "shown");
	});

	input[1].addEventListener("focusout", () => {
		setTimeout(function () {
			dropdown2[0].classList.replace("shown", "hidden");
		}, 100);
	});

	for (let i = 0; i < dropdownList[1].childNodes.length; i++) {
		if (dropdownList[1].childNodes[i].nodeName == "LI") {
			dropdownList[1].childNodes[i].addEventListener("click", () => {
				inp[1].value = "Teste Rápido";
				/*inp[1].value =
					dropdownList[1].childNodes[i].childNodes[1].innerHTML;*/
			});
		}
	}

	/*input[2].addEventListener("focus", () => {
		dropdown3[0].classList.replace("hidden", "shown");
	});

	input[2].addEventListener("focusout", () => {
		setTimeout(function () {
			dropdown3[0].classList.replace("shown", "hidden");
		}, 100);
	});*/

	btnTheme[0].addEventListener("click", () => {
		body.classList.toggle("dark");
		imgLogo[0].src = "logo.svg";
	});

	/* EVENT LISTENER onmousedown E onmouseup NÃO FUNCIONAVAM
	function mouseDown() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "hidden";
	}

	function mouseUp() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "visible";
	}*/
}

if (body.classList.contains("marcacaoBody")) {
	let dropdown = document.querySelectorAll(".dropdown");
	let input = document.querySelectorAll(".inpPosto");
	let burger = document.querySelectorAll(".burger")[0];
	let nav = document.querySelectorAll("#navbar")[0];
	let btnTheme = document.querySelectorAll(".btnTheme");
	let dropdownList = document.querySelectorAll(".dropdownList")[0];
	let inp = document.querySelectorAll("input");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		if (nav.classList.contains("nav-active")) {
			for (child in burger.children) {
				burger.children[child].style.backgroundColor = "white";
			}
		} else {
			for (child in burger.children) {
				burger.children[child].style.backgroundColor = "#1abf5b";
			}
		}
	});

	input[0].addEventListener("focus", () => {
		dropdown[0].classList.replace("hidden", "shown");
	});

	input[0].addEventListener("focusout", () => {
		setTimeout(function () {
			dropdown[0].classList.replace("shown", "hidden");
		}, 100);
	});

	for (let i = 0; i < dropdownList.childNodes.length; i++) {
		if (dropdownList.childNodes[i].nodeName == "LI") {
			dropdownList.childNodes[i].addEventListener("click", () => {
				inp[0].value =
					dropdownList.childNodes[i].childNodes[1].innerHTML;
			});
		}
	}

	btnTheme[0].addEventListener("click", () => {
		body.classList.toggle("dark");
		imgLogo[0].src = "logo.svg";
	});

	/* EVENT LISTENER onmousedown E onmouseup NÃO FUNCIONAVAM*/
	function mouseDown() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "hidden";
	}

	function mouseUp() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "visible";
	}
}

// PÁGINA LOGIN
if (body.classList.contains("loginBody")) {
	let btnTheme = document.querySelectorAll(".btnTheme");

	btnTheme[0].addEventListener("click", () => {
		body.classList.toggle("dark");
		imgLogo[0].src = "logo.svg";
	});

	/* EVENT LISTENER onmousedown E onmouseup NÃO FUNCIONAVAM*/
	function mouseDown() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "hidden";
	}

	function mouseUp() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "visible";
	}
}

// PÁGINA SIGNUP
if (body.classList.contains("signupBody")) {
	let btnTheme = document.querySelectorAll(".btnTheme");
	let btnCriar = document.querySelectorAll("#btnCriar")[0];
	let inpUser = document.querySelectorAll(".inpUser");

	btnTheme[0].addEventListener("click", () => {
		body.classList.toggle("dark");
		imgLogo[0].src = "media/logo.svg";
	});

	/* EVENT LISTENER onmousedown E onmouseup NÃO FUNCIONAVAM*/
	function mouseDown() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "hidden";
	}

	function mouseUp() {
		let lightSVG = document.querySelectorAll(".lightSVG");
		lightSVG[0].style.visibility = "visible";
	}

	btnCriar.addEventListener("click", () => {
		if (inpUser[7].value != inpUser[8].value) {
			alert("As palavras-passe inseridas não são iguais");
			return;
		}

		const newUser = new User(
			inpUser[0].value,
			inpUser[1].value,
			inpUser[2].value,
			inpUser[3].value,
			inpUser[4].value,
			inpUser[5].value,
			inpUser[6].value,
			inpUser[7].value
		);

		// Vamos buscar o conteúdo da localstorage e guardámos numa array
		let lsUser = JSON.parse(localStorage.getItem("Users"));
		let users = [];
		if (lsUser) {
			for (let x = 0; x < lsUser.length; x++) {
				users.push(lsUser[x]);
			}
		}

		// Guarda-se o objeto newUser na array users e manda-se para a localstorage
		users.push(newUser);
		localStorage.setItem("Users", JSON.stringify(users));
	});

	// Funções para limitar o número de caracteres no input NIF
	function maxLengthCheck(object) {
		if (object.value.length > object.max.length)
			object.value = object.value.slice(0, object.max.length);
	}

	function isNumeric(evt) {
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
		var regex = /[0-9]|\./;
		if (!regex.test(key)) {
			theEvent.returnValue = false;
			if (theEvent.preventDefault) theEvent.preventDefault();
		}
	}
}

if (body.classList.contains("postosBody")) {
}

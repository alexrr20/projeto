let body = document.getElementsByTagName("body")[0];
let burger = document.querySelectorAll(".burger")[0];
let nav = document.querySelectorAll("#navbar")[0];

burger.addEventListener("click", () => {
	nav.classList.toggle("nav-active");
	if (nav.classList.contains("nav-active")) {
		for (child in burger.children) {
			burger.children[child].style.backgroundColor = "#fff0d2";
		}
	} else {
		for (child in burger.children) {
			burger.children[child].style.backgroundColor = "#1e1c41";
		}
	}
});

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
	let input = document.querySelectorAll(".search-item");
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
				inp[1].value =
					dropdownList[1].childNodes[i].childNodes[1].innerHTML;
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
	function rangeSlide(value) {
		document.getElementById(
			"rangeValue"
		).innerHTML = `<span class="bold">${value}</span> Km`;
	}

	let filtroToggle = document.querySelectorAll("#filtroToggle")[0];

	filtroToggle.addEventListener("click", () => {
		let panel = document.querySelectorAll(".filtros1")[0];
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			filtroToggle.innerHTML = "Mostrar";
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			filtroToggle.innerHTML = "Esconder";
		}
	});

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

	let inpPosto = document.querySelectorAll("#inpPosto")[0];
	inpPosto.focus();

	function search() {
		value = inpPosto.value.toUpperCase();
		ul = document.querySelectorAll(".dropdownList")[0];
		li = ul.getElementsByTagName("li");
		for (let i = 0; i < li.length; i++) {
			h5 = li[i].getElementsByTagName("h5")[0];
			txtValue = h5.textContent || h5.innerText;
			if (txtValue.toUpperCase().indexOf(value) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}
	}

	let info = document.querySelectorAll(".info");

	for (let i = 0; i < info.length; i++) {
		info[i].addEventListener("click", () => {
			if (document.querySelectorAll("#container2").length != 0) {
				document.querySelectorAll("#container2")[0].remove();
			}
			let main = document.querySelectorAll("main")[0];
			let newDiv = document.createElement("div");
			let posto = JSON.parse(localStorage.Postos);
			newDiv.setAttribute("id", "container2");
			newDiv.innerHTML = `        <div class="container2-1">
        <h3>Nome</h3>
        <h2>${posto.nome}</h2>
        <div class="medalhas">
          <h3>Medalhas</h3>
        </div>
        <div class="postoInfoContainer">
          <div class="postoInfo">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <div class="postoInfoText">
              <h4>Morada</h4>
              <p>${posto.morada}</p>
            </div>
          </div>
          <div class="postoInfo">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.8" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <div class="postoInfoText">
              <h4>Contacto</h4>
              <p>${posto.contacto}</p>
            </div>
          </div>
          <div class="postoInfo">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
            <div class="postoInfoText">
              <h4>Horário</h4>
              <p>S${posto.horario}</p>
            </div>
          </div>
          <div class="postoInfo">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="12" r="9" />
              <line x1="3.6" y1="9" x2="20.4" y2="9" />
              <line x1="3.6" y1="15" x2="20.4" y2="15" />
              <path d="M11.5 3a17 17 0 0 0 0 18" />
              <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>
            <div class="postoInfoText">
              <h4>Website</h4>
              <p>${posto.website}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container2-2">
        <h3>Avaliações</h3>
      </div>`;
			main.appendChild(newDiv);
		});
	}
}

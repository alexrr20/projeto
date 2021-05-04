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

document.querySelectorAll(".btnSubmit")[1].onclick = function () {
  location.href = "login.html";
};

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

  class User {
    constructor(username) {
      this.username = username;
    }

    hello = function () {
      console.log("Hello");
    };
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
          localStorage.setItem("Logged In", JSON.stringify(lsUser[i]));
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

if (body.classList.contains("inicioBody")) {
  let dropdown = document.querySelectorAll(".dropdown");
  let input = document.querySelectorAll(".search-item");
  let burger = document.querySelectorAll(".burger")[0];
  let nav = document.querySelectorAll("#navbar")[0];
  let btnTheme = document.querySelectorAll(".btnTheme");

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
    dropdown[0].classList.replace("shown", "hidden");
  });

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

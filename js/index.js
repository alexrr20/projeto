let body = document.getElementsByTagName("body")[0];

if (body.classList.contains("faqBody")) {
  let btnSubmit = document.querySelectorAll(".btnSubmit");
  let btnRemove = document.querySelectorAll(".btnRemove");
  let btnLight = document.querySelectorAll("#btnLight");
  let btnDark = document.querySelectorAll("#btnDark");
  let imgLogo = document.querySelectorAll("#logo");

  btnDark[0].addEventListener("click", () => {
    body.classList.replace("light", "dark");
    imgLogo[0].src = "logo2.svg";
  });

  btnLight[0].addEventListener("click", () => {
    body.classList.replace("dark", "light");
    imgLogo[0].src = "logo.svg";
  });

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

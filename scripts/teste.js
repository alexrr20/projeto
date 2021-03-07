class User {
  constructor(id, username, password, name, gender, dob, city, email, phone) {
    this.id = "U" + id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.login = function () {
      this.loggedIn = true;
    };
    this.logout = function () {
      delete this.loggedIn;
    };
  }
}

function getId() {
  return Math.floor(100000 + Math.random() * 900000);
}

function addUser() {
  let id = getId();
  let username = document.getElementById("nuInput").value;
  let password = document.getElementById("pInput").value;
  let cpassword = document.getElementById("cpInput").value;
  let name = document.getElementById("ncInput").value;
  let gender = document.getElementById("gInput").value;
  let dob = document.getElementById("dnInput").value;
  let city = document.getElementById("lInput").value;
  let email = document.getElementById("eInput").value;
  let phone = document.getElementById("ntInput").value;
  let lsUser = localStorage.getItem("users");
  lsUser = JSON.parse(lsUser);

  let userArray = [];
  userArray.push(id, username, password, name, gender, dob, city, email, phone);

  if (password != cpassword) {
    return false;
  }

  const newUser = new User(...userArray);

  if (lsUser === null) {
    lsUser = {
      [newUser.id]: newUser,
    };
    localStorage.setItem("users", JSON.stringify(lsUser));
  } else {
    lsUser = {
      ...lsUser,
      [newUser.id]: newUser,
    };
    localStorage.setItem("users", JSON.stringify(lsUser));
  }
}

let btnNewAccount = document.getElementById("submit");
btnNewAccount.addEventListener("click", addUser);

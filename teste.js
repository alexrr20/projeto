class Point {
  constructor(id, name, city, lat, long, email, phone) {
    this.id = "P" + id;
    this.name = name;
    this.city = city;
    this.lat = lat;
    this.long = long;
    this.availableTests = ["R"];
    this.contacts = {
      email: email,
      phone: phone,
    };
  }
}

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
  }
}

let array = [
  194374,
  "Unilabs",
  "Porto",
  "xxxxx",
  "xxxxx",
  "sadas@gmail.com",
  "93123122",
];
const newPoint = new Point(...array);

let array2 = [
  312313,
  "alexrr10",
  "alexrr10",
  "Alexandre",
  "Male",
  "9 March 2000",
  "Arouca",
  "alex11.bessa@gmail.com",
  "911824300",
];
const newUser = new User(...array2);

console.log(newPoint);

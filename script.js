//Task1
ball.style.borderRadius = "50%";
ball.style.border = "5px solid hotPink";
ball.style.width = "200px";
ball.style.height = "200px";
ball.style.backgroundImage = "linear-gradient(lightBlue, pink)";

//Task2
const Maayan = {
  name: "Maayan",
  lastName: "Zakuta",
  age: 20,
  gender: "female",
  status: "Single ಥ_ಥ",
};

const MaayanId = document.getElementById("list");
MaayanId.children[0].innerHTML = Maayan.name;
MaayanId.children[1].innerHTML = Maayan.lastName;
MaayanId.children[2].innerHTML = Maayan.age;
MaayanId.children[3].innerHTML = Maayan.gender;
MaayanId.children[4].innerHTML = Maayan.status;

//Task3

const car = {
  title: "car",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};

const cardId = document.getElementById("card")
cardId.children[0].innerHTML = car.title;
cardId.children[1].innerHTML = car.price;
cardId.children[2].innerHTML = car.hand;
cardId.children[3].innerHTML = car.km;
cardId.children[4].innerHTML = car.year;

card.style.border = "5px solid hotPink";
card.style.width = "400px";
card.style.height = "400px";
card.style.textAlign = "center";

card.style.backgroundImage = "linear-gradient(lightBlue, pink)";

//Task4

m.classList.add("bg-danger");




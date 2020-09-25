const addPower = () => {
  const power = document.querySelector("#power");
  power.innerHTML = Number(power.innerHTML) + 1;
}

const addMoney = () => {
  const money = document.querySelector("#money");
  money.innerHTML = Number(money.innerHTML) + 1;
}

const upgrade = (event) => {
  alert(event.target.id);
}
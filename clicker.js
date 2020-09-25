const addPower = () => {
  const power = document.querySelector("#power");
  power.innerHTML = Number(power.innerHTML) + 1;
}

const addMoney = () => {
  const money = document.querySelector("#money");
  money.innerHTML = Number(money.innerHTML) + 1;
}

const upgrade = (event) => {
  if (event.target.id === 'powerUpgrade') {
    addPower()
  } else {
    addMoney()
  }
}
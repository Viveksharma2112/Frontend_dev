// Q1 – Async Coffee Maker
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) resolve("Water boiled");
      else reject("Boiling failed");
    }, 1200);
  });
}
function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) resolve("Coffee brewed");
      else reject("Brewing failed");
    }, 1500);
  });
}
function pourCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) resolve("Coffee poured");
      else reject("Pouring failed");
    }, 1000);
  });
}

boilWater()
  .then(res => { console.log(res); return brewCoffee(); })
  .then(res => { console.log(res); return pourCup(); })
  .then(res => { console.log(res); console.log("Coffee ready for the team!"); })
  .catch(err => console.log("Error:", err));

// Q3 – Bug Tracker
function getBugs() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => {
      if (fail) reject("API Failed");
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(data => console.table(data))
  .catch(err => console.log("Error:", err));

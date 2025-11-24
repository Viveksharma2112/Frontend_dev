// Q4 – DevOps Delay
function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random()<0.9) resolve("Server A done");
      else reject("Server A failed");
    },2000);
  });
}
function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random()<0.9) resolve("Server B done");
      else reject("Server B failed");
    },3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.log(err));

Promise.race([serverA(), serverB()])
  .then(res => console.log("Fastest response:", res))
  .catch(err => console.log(err));

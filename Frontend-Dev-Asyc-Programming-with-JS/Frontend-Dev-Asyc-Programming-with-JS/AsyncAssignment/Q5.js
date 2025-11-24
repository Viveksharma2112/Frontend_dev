// Q5 – Callback Hell and async/await

function stage(name, cb) {
  setTimeout(() => { console.log(name); cb(); },1000);
}

// Callback Hell
stage("design", () => {
  stage("build", () => {
    stage("test", () => {
      stage("deploy", () => {
        stage("celebrate", () => {});
      });
    });
  });
});

// async/await version
function stageAsync(name){
  return new Promise(res => setTimeout(() => {console.log(name); res();},1000));
}

async function runPipeline(){
  await stageAsync("design");
  await stageAsync("build");
  await stageAsync("test");
  await stageAsync("deploy");
  await stageAsync("celebrate");
}

runPipeline();
// async/await avoids deep nesting and improves readability.

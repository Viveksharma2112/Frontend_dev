// Q2 – Task Scheduler
console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise.then"));

console.log("End");

// Microtasks always run before macrotasks.

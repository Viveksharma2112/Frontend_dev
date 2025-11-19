// Q1. Scope Conflict Resolver
var bonus = 5000;
var isPermanent = false;
function calculateSalary() {
  var salary = 40000;
  var isPermanent = true;
  var total = salary + (isPermanent ? bonus : 0);
  console.log("[Q1] Inside calculateSalary() -> isPermanent:", isPermanent);
  console.log("[Q1] Total salary:", total);
}
console.log("[Q1] Global isPermanent:", isPermanent);
calculateSalary();
console.log("[Q1] Global after:", isPermanent);

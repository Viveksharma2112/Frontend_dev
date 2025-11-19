function r(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
var scores=Array.from({length:8},()=>r(30,100));
console.log(scores, Math.max(...scores), Math.min(...scores), scores.reduce((a,b)=>a+b,0)/scores.length, scores.filter(s=>s>=50).length);

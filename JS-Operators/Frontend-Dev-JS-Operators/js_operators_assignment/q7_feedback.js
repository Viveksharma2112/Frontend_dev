var fb="Great product! Fast delivery and amazing sound quality!";
var wc=fb.split(/\s+/).filter(Boolean).length;
var neg=fb.toLowerCase().includes("bad")||fb.toLowerCase().includes("poor");
console.log(wc,neg?"Needs Improvement":"Positive Feedback");

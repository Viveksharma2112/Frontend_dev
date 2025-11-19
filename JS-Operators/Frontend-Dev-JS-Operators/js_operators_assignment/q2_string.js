// Q2. String Manipulation Report
var rawProductName = " wireless headphones PRO ";
var cleaned = rawProductName.trim().toLowerCase().split(" ")
  .filter(Boolean)
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
var finalTitle = cleaned.replace(/\bPro\b/i, "Pro Edition");
console.log(finalTitle, finalTitle.length);

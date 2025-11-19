const deps=[["HR",72],["Finance",88],["Tech",95],["Support",63]];
deps.forEach(([n,s])=>{var g=s>=90?"Excellent":s>=75?"Good":s>=60?"Average":"Needs Improvement";console.log(n,g);});

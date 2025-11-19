const cart=[{item:"Laptop",category:"electronics",price:45000},{item:"Shoes",category:"fashion",price:2500},{item:"Book",category:"education",price:600}];
var di=cart.map(p=>{var r=0;if(p.category==="electronics")r=0.1;else if(p.category==="fashion")r=0.05;return {...p,discountedPrice:p.price*(1-r)};});
var sub=di.reduce((s,p)=>s+p.discountedPrice,0);
var fx=sub>50000?sub*0.95:sub;

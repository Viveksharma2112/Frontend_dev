// Q6 – Fetch Fake Store API
async function loadProducts(){
  try{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data.forEach(p=>{
      console.log("Product:", p.title);
      console.log("Price: $"+p.price);
      console.log("Image:", p.image);
      console.log("-----");
    });
  }catch(e){
    console.log("Failed to load products. Please try again.");
  }
}
loadProducts();

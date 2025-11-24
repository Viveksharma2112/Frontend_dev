// Q8 – Retry Logic
function submitOrder(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      if(Math.random()<0.5) res("Order Success");
      else rej("Order Failed");
    },500);
  });
}

async function processOrder(){
  for(let i=1;i<=3;i++){
    try{
      const r = await submitOrder();
      console.log("Attempt",i,": Success");
      return;
    }catch(e){
      console.log("Attempt",i,": Failed");
    }
  }
  throw "Order could not be processed";
}

processOrder().catch(e=>console.log(e));

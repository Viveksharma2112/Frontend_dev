var nums=[],res=[];for(let i=1;i<=30;i++)nums.push(i);
for(let n of nums){if(n%3===0&&n%5===0)res.push("FizzBuzz");else if(n%2===0)res.push("Even");else res.push("Odd");}
console.log(res);

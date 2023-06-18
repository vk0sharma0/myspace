
let a;
let b=0;
let c=0;

setInterval(()=>{
    a =Math.random()*1000;
    c=a-b;
b=c;
console.log(b);
},1000);

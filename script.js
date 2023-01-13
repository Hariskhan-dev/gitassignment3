let x = 11;
let count = 0;

for(let i=1; i<=x; i--){
  if(x%i==0){
    count++;
  }
}

if(count == 2){
  console.log(x+' '+'is a prime number');
} else {
  console.log(x+' '+'is not a prime number');
}
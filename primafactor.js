//600851475143
function primeornot(a){
    let flag=0
    for(let i=2;i<a/2;i++){
        if(a%i==0){
            return false
        }
    }
    return true
}
let n=600851475143
for (let i = 2; i <= 600851475143; i++) {
    while (n % i == 0) {
        if(primeornot(i)){
        maxprime=i
        }
     n /= i;
    }
    if(n<=1){
        break
    }
   }
console.log("maxprime"+maxprime)
function primeornot(a){
    let flag=0
    for(let i=2;i<a/2;i++){
        if(a%i==0){
            return false
        }
    }
    return true
}

let count=1;
let j=2

while(count!=10003){
    if(primeornot(j)){
        count++
        
    }
    j++
}
console.log(j-1)
function printornot(j){
  for(let i=2;i<j/2;i++){
    if(j%i==0){
      return false
    }

  }
  return true
}
let n=2
let maxprime=0
while(n<2000001){
  if(printornot(n)){
    maxprime+=n
    console.log(n)
  }
  n++
}
console.log(maxprime)
//bash .test.sh
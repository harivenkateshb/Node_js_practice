let a=1
let b=1
let c=1
let flag=0
for (a=400;a<1000;a++){
  for(b=200;b<a;b++){
    for(c=100;c<b;c++){
      if(a+b+c==1000 &&(a**2==b**2+c**2)){
        flag=1
        break
      }
    }
    if(flag==1){
      break
    }
  }
  if(flag==1){
      break
    }
}
console.log(a*b*c)

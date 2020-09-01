var maxpal=0
for(let i=100;i<1000;i++){
  for(let j=100;j<1000;j++){
    a=String(i*j)
    b=String(i*j).split("").reverse().join("")
    if(a==b){
      maxpal=(i*j)
      break
    }
  }
}
console.log(maxpal)
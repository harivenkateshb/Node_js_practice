var n=2500
let i=1
let div=1
while(n>0){
    i=1
    while(i<21){
      if(n%i==0){
        div++
      }
      else{
          break
      }
      i++
    }
    if(div<19){
      div=1
      n+=2
    }
    else{
      console.log(n)
      break
    }
    }

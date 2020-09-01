var fs = require('fs')

fs.exists('Node_folder', function (bool) {
    if(!bool){
        false.mkdir("Node_folder",function(err){
            if(err){
                console.log(err)
            }
            else{
                let i=1
                while(i<1000){
                fs.appendFile('./Node_folder/numbers.txt',i+'\n')
                i++
                }
            }
        })
    }
    else{
        let i=5
            while(i<1001){
        fs.appendFileSync('./Node_folder/numbers.txt',i+'\n')
        i++
    }
    }
})



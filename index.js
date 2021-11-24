var express = require('express')
var app = express()


app.get("/",(req,res)=>{

    let message = "Hello, to get the n-th fibonacci number request it at the end of the url for example http://localhost:3000/3"
    res.send(message)
})

app.get("/:fib",(req,res)=>{
    let n = req.params.fib;

    if(n == 0){
        return res.send(`The ${n}th fibonacci number is 0`)
    }else if(n <= 2){
        return res.send(`The ${n}th fibonacci number is ${1}`)
    }else if(n>2){
        let n1 = 1
        let n2 = 1
        let i = 2
        while(true){
            n1 = n1 + n2
            console.log(i)
            i++
            if(i==n) return res.send(`The ${n}th fibonacci number is ${n1}`)

            n2 = n1 + n2
            i++
            if(i==n)return res.send(`The ${n}th fibonacci number is ${n2}`)
        }

    }else{
        return(res.send("please write a positive number"))
    }

})


const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`App listening at http://localhost:${port}`))
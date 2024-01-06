const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.get('/sum/', (req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    if (!a || !b) {
        return res.status(400).json({
            msg: "Invalid input. Both 'a' and 'b' parameters are required."
        });
    }

    let result = 0
    function sum(num1, num2){
        num1 = parseInt(a);
        num2 = parseInt(b);
        result =  num1 + num2;
        return result
    }
    const sumResult = sum(a, b);
    res.json({
        msg : `The sum of the resultant number is ${sumResult}`
    })
})

app.listen(3000);
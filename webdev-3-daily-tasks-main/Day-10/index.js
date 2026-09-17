const express = require('express');
const app = express();

const logger1 = (req,res,next)=>{
    console.log("Middleware Ran !!!")
    next();
}

const checkAge =(req,res,next)=>{
    const age = 18;

    if(age < 18){
        return res.status(403).json({
            message:"There are no packag for your age group"
        })
    }
next()
}

const logger2 = (req,res,next)=>{
    console.log("Middleware Ran !!! Logger 2")
    next();
}

app.use(logger1);
app.use(logger2);


app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

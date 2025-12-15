/*const express = require("express");

const app = express();
const PORT = 3000;

// basic route
app.get("/", (req, res) => {
  res.send("Express server is running successfully 🚀");
});
app.get("/home",(req,res)=>{
    res.send("Welcome to the home page");
})

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/
// import http from 'http'

// const server = http.createServer((req,res)=>{
//     console.log(req.method);
//     if (req.url === '/users'){
//         res.writeHead(200,{'Content-type':'application/json'});
//         res.end(JSON.stringify({name:'Thub'}))
//     }
//     else{
//         res.writeHead(200,{"Content-Type":'text/plain'});
//         res.end('Hello this is from backend')
//     }
// });

// server.listen(7007, ()=>{
//     console.log(`server running at port ${7007}`)
// })

// import express from 'express'
// const app = express();
// app.get('/users', (req,res)=>{
//     res.send('hello this is from backend');
// })
// app.get('/get-users',(req,res)=>{
//     res.send('hello this is from 1backend');
// })
// app.listen(7007, ()=>{
//     console.log('server is running at 7007');
// });




import express from 'express';
// import bodyParser from 'body-parser';

const app = express()

// app.use(express.json())
// app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello this is from backend');
})
app.get('/get-user',(req,res)=>{
    res.send('Api Sucess');
})

app.put('/edit-user',(req,res)=>{
    let data = req.body;
    console.log(data);
})

app.post('/add-user',(req,res)=>{
    let data = req.body;n
    console.log(data); // undefined
    // logic to add data into databse
    res.send('Data Added');
})

app.listen(7007,(req,res)=>{
    console.log('Server is running in port 7007');
})
const app=require('./app');
const express = require('express');
const cors = require("cors");

// JSON body parse করার জন্য
app.use(express.json());

// form-urlencoded data parse করার জন্য (optional)
app.use(express.urlencoded({ extended: true }));


const users=[
  {
    "id": 1,
    "username": "Animes Barman",
    "email": "animesb@example.com",
    "age": 28,

    "address": "Dhaka, Bangladesh",

  },
  {
    "id": 2,
    "username": "Rina Das",
    "email": "rina.das@example.com",
    "age": 24,
    "address": "Chittagong, Bangladesh",

  },
  {
    "id": 3,
    "username": "Sabbir Ahmed",
    "email": "sabbir@example.com",
    "age": 32,
    "address": "Khulna, Bangladesh",
    
  },
  {
    "id": 4,
    "username": "Tania Rahman",
    "email": "tania.rahman@example.com",
    "age": 27,
    "address": "Sylhet, Bangladesh",

  },
  {
    "id": 5,
    "username": "Rifat Hossain",
    "email": "rifat.hossain@example.com",
    "age": 29,

    "address": "Rajshahi, Bangladesh",

  },
  {
    "id": 6,
    "username": "Mithila Khatun",
    "email": "mithila.khatun@example.com",
    "age": 22,
    "address": "Barisal, Bangladesh",
    
  },
  {
    "id": 7,
    "username": "Fahim Chowdhury",
    "email": "fahim.chowdhury@example.com",
    "age": 31,
  
    "address": "Comilla, Bangladesh",

  },
  {
    "id": 8,
    "username": "Nusrat Jahan",
    "email": "nusrat.jahan@example.com",
    "age": 26,
    "address": "Mymensingh, Bangladesh",

  },
  {
    "id": 9,
    "username": "Arif Khan",
    "email": "arif.khan@example.com",
    "age": 30,
    "address": "Rangpur, Bangladesh",
    
  },
  {
    "id": 10,
    "username": "Sabrina Akter",
    "email": "sabrina.akter@example.com",
    "age": 25,
    "address": "Tangail, Bangladesh",

  }
]


app.get('/', (req,res)=>{

    res.send('server is  running')
})

app.use(cors());

app.get('/users', (req,res)=>{

    try{
        res.status(200).json({
        message:'all users',
        succes:true,
        data:users,

        
    })
    }catch(err){

        res.status(400).send(err.message);


    }
})

app.post('/users', (req,res)=>{

    try{

        const newUsers=req.body;


        if(newUsers){

            res.status(201).send(newUsers)
        }else{

            res.status(499).send('user create faild');
        }


    }catch(err){

        res.send(400).send('post faild')
    }

  
})





app.listen(3000, ()=>{


    console.log(`server is running http://localhost:${3000}`)
})

const app=require('./app');





app.get('/', (req,res)=>{

    res.send('server is  running')
})






app.listen(3000, ()=>{


    console.log(`server is running http://localhost:${3000}`)
})

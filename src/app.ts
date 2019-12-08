import express from 'express'

const app = express()

app.get('./',(req,res) =>{

    res.send('teste')
});
app.listen(3000,()=> {console.log('listen') })
import express from 'express'

const routes = express.Router();


routes.get('/',(req,res) =>{
    res.status(500).json("sucess")
})

export default routes
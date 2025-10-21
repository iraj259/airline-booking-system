const express = require('express')
const {ServerConfig, Logger} = require('./config')
const apiRoutes =require('./routes')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT,async()=>{
    console.log(`Successfully started the server at port: ${ServerConfig.PORT}`)

    // bad code alert
    const {City, Airport} = require('./models')
    const city = await City.findByPk(1)
    console.log(city)
    // const airport = await Airport.create({name:'Lisbon airport', code:'Lisbon', cityId:1})
await city.destroy({
    where:{
        id:1
    }
})
})
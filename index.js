require('dotenv').config()
const express = require('express')
const {connect, set} = require("mongoose");
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

const start = async () => {
    try{
        set('strictQuery', false)
        await connect(process.env.DB_CONNECTION_URL)
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(`Server error: ${error}`)
        process.exit(1)
    }
}
start()
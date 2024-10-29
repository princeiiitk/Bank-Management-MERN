import dotenv from "dotenv"
import connectDB from './dbConection/connection.js'
import { app } from './app.js'
dotenv.config({
    path: './.env'
})

app.get('/', (req,res) => {
    return res.send("hello world")
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed");
    })


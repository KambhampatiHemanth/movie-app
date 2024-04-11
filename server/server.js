import express from "express"; 
import {connectDB} from "./db/connection.js"
import loginRouter from "./routes/login.js"
import cors from "cors"
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors({
    origin : ["http://localhost:3000"]
}))

app.use(loginRouter)
app.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello world</h1>")
})

async function main(){
    //pass your mysql options for login
    await connectDB();
    

    app.listen(port,()=>{
        console.log(`server started on port ${port}`)
    })
    
    
    
}


main()

app.use((err,req,res,next)=>{
    console.error(`${err.message}`)
})
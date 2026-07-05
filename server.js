const app =require("./src/app")
const connectDB =require("./src/db/db")



connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server is Starting on ${process.env.PORT} port`)
})
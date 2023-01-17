import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 5000;
const URL_DB = `mongodb+srv://user:user@cluster0.iqv3jlh.mongodb.net/?retryWrites=true&w=majority`
const app = express();

app.use(fileUpload({}))
app.use(express.json());
app.use('/api', router)

mongoose.set('strictQuery', false);

async function startApp(){
   try{
      await mongoose.connect(URL_DB, {useNewUrlParser: true, useNewUrlParser: true});
      
      app.listen(PORT, () => console.log("I am server, I am okey 123" + PORT));
   } catch (e) {
      console.log(e);
   }
}



startApp() 
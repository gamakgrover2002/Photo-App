import express from "express"
import { marked } from "marked";
const app = express();
const PORT = 3000;

app.use(express.json());        
app.use(express.text());   


app.post("/",(req,res)=>{
    const {markdown} = req.body;
    const content= marked.parse(markdown)
    res.send(content);
 })
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})


import express from 'express';
const app = express();

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('Hello Aliyun!');
})

app.listen(3000,()=>{
    console.log('Server Start!');
    console.log('Git');
})
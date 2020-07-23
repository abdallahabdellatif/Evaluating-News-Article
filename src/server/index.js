var path = require('path')
const express = require('express')
// var aylien = require("aylien_textapi");
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const bodyParser=require('body-parser');
const cors=require('cors');
dotenv.config();
var fetch = require("node-fetch");

const fs=require('fs')


// var textapi = new aylien({
//     application_id: "02864a35",
//     application_key: "6d337cc3c2c81472457a41c659b3e96d"
//  });

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// app.get('/why', function (req, res) {
//     res.sendFile('dist/index.html')
// })
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/',async function(req,res){
    let dataRetrieved=req.body.myText
    // console.log(dataRetrieved)
    let resp= await fetch('https://api.meaningcloud.com/sentiment-2.1?key='+process.env.LIC_KEY+'&lang=en&txt='+dataRetrieved+'&model=general')
    .then(response=>{
       return response.json();
    }).then(myres=>{res.send(myres)}).
    catch(error=>{console.log("stop ittttt")})
    // try{
    //     const data=await response.json();
    //     console.log(data);//process data?
    //     res.send(data) ;
    // }
    // catch(error){
    //     console.log("Ops, ",error);
    // }
})
// const getDataOfText=async (inText)=>{
//     const res= await fetch('https://api.meaningcloud.com/sentiment-2.1?key='+mykey+'&lang=en&txt='+inText+'&model=general').catch((err)=>
//         console.log(err)
//     );
//     try{
//         const data=await res.json();
//         console.log(data);//process data?
//         return data;
//     }
//     catch(error){
//         console.log("Ops, ",error);
//         return ""
//     }
// }
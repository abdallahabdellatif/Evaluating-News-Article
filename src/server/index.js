var path = require('path')
const express = require('express')
var AYLIENTextAPI = require("aylien_textapi");
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const bodyParser=require('body-parser');
const cors=require('cors');
dotenv.config();

myData={}

var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });

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
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/',function(req,res){
    let dataRetrieved=req.body.myText
    // console.log(dataRetrieved)
    //get from api
    textapi.sentiment({
        'text': dataRetrieved
    }, function(error, resp) {
        if (error === null) {
            console.log(resp);
            res.send(JSON.stringify(resp))
        }else{
            console.log("stop thereee")
            res.send(JSON.stringify(resp))
        }
    })
})
        // try{
    //     const data=await res.json();
    //     console.log(data)
    //     myData["tone"]=data.tone
    //     myData["reflection"]=data.reflection
    //     myData["confidence"]=data.confidence
    //     console.log(myData)//process data?
    //     res.send(myData)
    // }
    // catch(error){
    //     console.log("Ops, ",error);
    // }



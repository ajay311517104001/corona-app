var express =require('express')
var router=express.Router()
var url=require('url')
var request = require('request')
const fetch=require('node-fetch')
require('dotenv').config();
console.log(process.env)
function  fun(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

}   
router.get('/',function(req,res){
    if(Object.keys(req.query).length==0){
     const url= process.env.API_KEY;
    request(url,(err,body)=>{
    if(err){
        console.log(err)
    }else{
    var data=JSON.parse(body.body)
    newcon=fun(data.confirmed.value);
    newrec=fun(data.recovered.value);   
    newdet=fun(data.deaths.value);
    var arr =data.lastUpdate.split('T')
    res.render('index',{newcon:newcon,newrec:newrec,newdet:newdet,array:arr[0],array1:arr[1]})
    }})
    }
if(Object.keys(req.query).length!=0){
    var qs =req.query
    //console.log(qs['drop-value'])
    api=process.env.API_KEY1;
    var spotted=qs['drop-value'].toUpperCase()
    //fetch(api+spotted)
    //.then((response)=>response.json())
    //.then(function(data){
      //console.log(data)
      request(api+spotted,(err,body)=>{
        if(err){
            console.log(err)
        }else{
            var data=JSON.parse(body.body)
         var gval=  data.confirmed.value
         var grec=data.recovered.value
         var gdet=data.deaths.value
         console.log(gval)
        scontval=fun(data.confirmed.value);
        snewrec=fun(data.recovered.value);   
        snewdet=fun(data.deaths.value);
        var arr =data.lastUpdate.split('T')
        res.render('index',{newcon:newcon,newrec:newrec,newdet:newdet,array:arr[0],array1:arr[1],scontval:scontval,snewrec:snewdet,snewdet:snewrec,couname:spotted,gval:gval,grec:grec,gdet:gdet})       
    }})
}
    }
   
   

)
router.get('/india',function(req,res){
    res.render('india')
})

router.get('/district',function(req,res){
    //var qs =req.query
   // console.log(req.query)
   // var spotted1=qs['drop-value']
   // if(!spotted1){
   res.render('districts')
   // }
    //console.log(req.query)
   //if(spotted1)
   // {
   //     res.render('districts',{spotted1:spotted1})
   //     console.log(spotted1)
   //  fetch('https://api.covid19india.org/v2/state_district_wise.json')
   // .then((response)=> response.json())
   //.then(function(data) {
       

        //for(var i=0;i<32;i++){
           //if(spotted1==data[i].state){
               //crr=[]
                //crr.push(data[i].districtData)
               //res.render('districts',{ crr:JSON.stringify(data[i].districtData)})
               // console.log(data[i].districtData)
                //arry.push(data[i].districtData)
            //}
       // }
   //})}
  
  
 
})

router.get('/graph',function(req,res){
    res.render('char')
})


module.exports=router
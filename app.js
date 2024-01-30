// https://api.weatherapi.com/v1/current.json?key=923db5dcaac1470cb36155736242501&q=kolkata
const requst = require('request');

//const chalk = require('chalk');

let location = process.argv[2] ;

const url =`https://api.weatherapi.com/v1/current.json?key=923db5dcaac1470cb36155736242501&q=${location}`;

console.log(location);

let data =null ;

 requst({url:url},(error,res)=>{
  if (error) {
    console.log('please connect internet');
  }else{
      console.log(typeof res);
          data = JSON.parse(res.body);
  }
 });

 setTimeout(() => {
   //console.log(error);
    if (data.error) {
        console.log(data.error.message);
    }else{
    console.log("Your location's current temp", data.current.temp_c ,'C');
    }
 },2000);

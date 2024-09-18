//// date objects  = objects that contains values that represent dates and times
/////                these dates can be formattes according to our needs.

/*
const date = new Date;
console.log(date);    */      // it will give the new date

// Date(year,month,day,hour,minute,second,ms)

const date = new Date(2023,1,2,5,5,4);
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayofweek = date.getDay();
console.log(year,month,day,hour,minute,second);

const setyear = date.setFullYear(2024);
const setmonth = date.setMonth(9);
const setday = date.setDate(16);
const sethour = date.setHours(4);
const setmin = date.setMinutes(45);
console.log(setyear,setmonth,setday,setmin);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2>date1) {
    console.log("HAPPY NEW YEAR");
}
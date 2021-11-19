//問題１
const array = [2, 4, 7, 5, 4, 3, 8];
const imdexof = array.filter(function (item) {
  return item + 2 + 2;
});

console.log(2,7,5,3,8)





//問題２

function isLeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2020||2021;
if(isLeapYear(checkYear)){
  console.log(checkYear + '年はうるう年です');
}else{
  console.log(checkYear + '年はうるう年ではありません');
}


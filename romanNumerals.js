
function num2digits(num)
{
  let numStr = num.toString()
  let a = numStr.split("")
  let b = []

  let decPlace = 1;
  for(let i=a.length-1; i>=0; i--, decPlace *= 10)
  {
    b.unshift(a[i]*decPlace)
  }
  
  return b
}

function digit2Roman(d)
{
  let retVal = "?"+d+"?"
  if ( d < 4) {
    retVal = "I".repeat(d)
  }
  else if ( d == 4) {
    retVal = "IV"
  }
  else if ( d < 9 ) {
     retVal = "V"+ "I".repeat(d-5)
  }
  else if ( d == 9) {
    retVal = "IX"
  }   
  else if ( d < 40 ) {
     retVal = "X".repeat(d/10)
  }   
 else if ( d < 90 ) {
   console.log(d)
     retVal = "L"+ "X".repeat((d-50)/10)
  }   
  else if ( d == 90) {
    retVal = "XC"
  }     
 else if ( d < 400 ) {
   console.log(d)
     retVal = "C".repeat((d)/100)
  }    
 else if ( d == "500")    {
   retVal = "D"
 }
  else if ( d < 900 ) {
   console.log(d)
     retVal = "D" + "C".repeat((d-500)/100)
  }  
  else if ( d == "900")    {
   retVal = "DM"
  }  
  else if ( d < "4000")    {
   retVal = "M".repeat(d/1000)
  }    
  return retVal
}

function convertToRoman(num) {
  let b = num2digits(num)
  let roman = [];
  console.log(b);
  for(let i=0; i<b.length; i++)
    roman.push(digit2Roman(b[i]))
  console.log(roman);
  let romNum = roman.join("")
 return romNum;
}

console.log(
convertToRoman(3999)
);

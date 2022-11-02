
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

function convertToRoman(num) {
  let b = num2digits(num)
  console.log(b)
 return num;
}

console.log(
convertToRoman(1)
);

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

function lowerCaseWords(array){
  return new Promise((resolve, reject) =>{
    var result = array.filter(function (value) {
      return typeof value === 'string';
    });
    const lowerCased   = result.map(str => str.toLowerCase());
    console.log(lowerCased)
    const error = false;
    if(!error){
      resolve()
    }else{
      reject("Error: Something went wrong")
    }
  })
}
lowerCaseWords(mixedArray)

const i = "01:00"



const  stringToNumber= (string)=>string.split("").filter(i=>isNaN(i,)==false).map(i=>Number(i))

const getMilisecFromString=(numString)=>{
  stringToNumbersArry= stringToNumber(numString)
      const MiliscCounterObj={
        "0": (num) => num !== 0 ? num * 10 * 60 * 1000 : 0,
        "1": (num) => num !== 0 ? num * 60 * 1000 : 0,
        "2": (num) => num !== 0 ? num  * 10 * 1000 : 0,
        "3": (num) => num !== 0 ? num * 1000 : 0,
  
       
           }
   
  return  stringToNumbersArry.reduce((accumulator, currentValue, currentIndex)=> accumulator + MiliscCounterObj[currentIndex](currentValue)) 

}

// var y =stringToNumber(i)

 var y =getMilisecFromString(i)

console.log(y);
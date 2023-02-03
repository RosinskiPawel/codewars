const xtable = ["i","m","2","z","m","1","c","z","t","c","g","t","6","g","m","c","i","r","d"]
const xtable2 = []
for (let i=0; i<=xtable.length-1; i++){
    
    if (i %2===0){
        xtable2.push(xtable[i])}}
xtable2

function removeEveryOther(arr){
    let newArr = []
    for (let i=0; i<=arr.length-1; i++){
    
        if (i %2===0){
            newArr.push(arr[i])}}
      return newArr
  }
  removeEveryOther(["i","m","2","z","m","1","c","z","t","c","g","t","6","g","m","c","i","r","d"])

 
 
  function removeEveryOther2(arr){
     arr.filter(function(elem, index) {
      return elem % 2 === 0;
    });
  }
  removeEveryOther2([1, 2, 3, 4, 4, 3, 2, 1, 12, 14])
const data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
const chuj = [1, 2, 3]

function openOrSenior(data){
    let kurwanowa = []
    for (let i=0; i<=data.length-1; i++) {
        
        
        if (data[i][0]>54 && data[i][1]>7){
       kurwanowa.push("Senior")}else{kurwanowa.push( "Open")}} return kurwanowa
      
   }
   openOrSenior( [45, 2], [61, 12])


     

   function friend(friends){
    friends.filter(function(el, ind) {return el.length===4;})
                                              return 
    
}

  friend(["Ryan", "Kieran", "Mark"])
                                              
    
 

//   friend(["Ryan", "Kieran", "Mark"])
//   const chuje2 = ["Ryan", "Kieran", "Mark"]
//   chuje2.filter(function(el, ind) {return el.length===4;})

var isSquare = function(n){
   if (Math.sqrt(n)%2)
    {return true};

  }


// function openOrSenior(data){
//  for (const el of data) {
//      if (el[0]>=55 && el[1]>7){
//     return "Senior"}else{return "Open"}}
   
// }
// openOrSenior([[60,15], [45, 2], [61, 12]])

// let chuje = [[60,15], [45, 2], [61, 12]]
// for (let el of chuje){if ( el[0]>50 && el[1]>11){console.log( 'Senior')} else {console.log('Open')}}

// const chuje2= chuje.filter(el=> el[0]>50 && el[1]>12)
// const chuje2= chuje.map(el=> {if (el[0]>50 && el[1]>12) {return "Senior"}else {return 'Open'}})

// function openOrSenior2(data){
//     return data.map(el=> {if (el[0]>50 && el[1]>12) {return "Senior"}else {return 'Open'}})
// }
// openOrSenior2([60,15], [45, 2], [61, 12])




function areYouPlayingBanjo(name) {
    if (name.startsWith('R' && 'r')){
    return name + " plays banjo"} else { return name + " does not play banjo"};
  }

  areYouPlayingBanjo('Robert')

  function createPhoneNumber(numbers){let newNumb = numbers.join('')
return '(' + newNumb.substring(0,3)+ ')'+ ' '+ newNumb.substring(3, 5)+' '+newNumb.substring(6)
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])



function bmi(weight, height) {
    const bmi = weight/(height*height)
    if (bmi <= 18.5){return "Underweight"}
    if (bmi <= 25.0){return "Normal"}
    if (bmi <= 30.0){return "Overweight"}
    else {return "Obese"}
  }
  bmi(23, 1.23)



let num = 9119
let rt = +num.toString().split('').map(el=> {return el**2}).join('')

rt

let greets = 
{english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}

greets.czech


let costam = [1, 0, 0, 1]
costam.length


let niec = costam.map((el, i) => el * Math.pow(2, (costam.length - (i+1)))).reduce((a, b) => a+b)
niec
const binaryArrayToNumber = costam => {
    costam.map((el, i) => el * Math.pow(2, (costam.length - (i+1)))).reduce((a, b) => a+b)
  };
 
 


  function enough(cap, on, wait) {
 
    if (wait === (cap-on)){return 0 }
   else {return (wait-(cap-on)) }
}
   
function binaryArrayToNumber1(costam){ return costam.map((el, i) => el * Math.pow(2, (costam.length - (i+1)))).reduce((a, b) => a+b)
}

function binaryArrayToNumber1(costam) { return parseInt(costam.join(''), 2) }

function add(a, b) {
    return (BigInt(a) + BigInt(b)).toString();

}
add('12', '12')

function nbYear(p0, percent, aug, p) {
    let pop = 0
     let years = 0
      for (let x = 0; pop<=p; x++){
          pop = p0 + p0 * (percent / 100) + aug
         
      } years+=
       
              return years
    }
 
    function sortArray(array) {
 
  return array.filter(el=>el%2).sort()
}




    
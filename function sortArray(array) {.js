function sortArray(array) {
 
    return array.filter(el=>el%2).sort()
}

let exe = [5, 8, 6, 3, 4, 7, 43, 13]
let sx = exe.map(el => el+2)
sx
const cv = exe.filter(el => el % 2).sort((a, b)=>a-b)
cv
const exeev = exe.filter(el => !(el % 2))
exeev
const newarray = exe.map(el => el % 2 ? cv.shift() : el)
newarray

function sortArray(array) {
 
    const oddnum = array.filter(el => el % 2).sort((a, b)=>a-b)
  
    const sortednum = array.map(el => el % 2 ? oddnum.shift() : el)
    return sortednum

}
let wname = "Tom Jones"
wname.split('')

  
const n = 3
const arr = []
for (let x=0; x<=n; x++){
    arr.push(1+n*2)
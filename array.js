var students=["Raj","Vinay","Sam","abdul","rajat"]
console.log(students.length)
//remove the last element
students.pop("karuna")
console.log(students)
//removes the first element
students.shift("karuna")
console.log(students)
//add the elements to the start
students.unshift("karuna")
console.log(students)
//slice does not change the original array
var shortlist=students.slice(1,3)
console.log(shortlist)
console.log(students)
//splice will change the original array
var shortlist1=students.splice(1,3)
console.log(shortlist1)
console.log(students)
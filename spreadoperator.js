// spread operator
set1=[1,2,3,4,5]
set2=[...set1,6,7,8,9,10]
console.log(set2)
const engineering={
     semeter:"5",
     branch: 'AIML'
}
const section={
    ...engineering,
    no_of_student:70
}
console.log(section)
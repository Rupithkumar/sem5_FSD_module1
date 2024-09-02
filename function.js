function oldversion(){
    console.log("HI harry")
}
oldversion()

newversion=()=>console.log("HI i am new");
newversion()

function oldreturn(a){
    return a+1
}
console.log(oldreturn(35))

newversion1=(no1,no2)=>
    {
        return(no1+no2)*5;
    }
console.log(newversion1(5,3))
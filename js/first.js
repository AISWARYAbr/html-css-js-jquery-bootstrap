//my first line in java script
console.log("...Hello World...")
//2
person="Aiswarya"
console.log(person)

var num = 1
console.log(num)
var num = 2
console.log(num)

//3
let num1 = 3
console.log(num1)

/* let num1 = 4
console.log(num1)

output
------
c:\Users\aiswa\OneDrive\Desktop\js\first.js:11
let num1 = 4
    ^

SyntaxError: Identifier 'num1' has already been declared
    at wrapSafe (internal/modules/cjs/loader.js:988:16)
    at Module._compile (internal/modules/cjs/loader.js:1036:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
*/

num1 =4
console.log(num1)

let num2=5
console.log(num2)

/* let person='Aiswaryabr'
console.log(person)

output
------
"c:\Users\aiswa\OneDrive\Desktop\js\first.js"
...Hello World...
c:\Users\aiswa\OneDrive\Desktop\js\first.js:4
person="Aiswarya"
      ^

ReferenceError: Cannot access 'person' before initialization
    at Object.<anonymous> (c:\Users\aiswa\OneDrive\Desktop\js\first.js:4:7)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

[Done] exited with code=1 in 0.122 seconds
*/

let sameperson='Aiswaryabr'
console.log(sameperson)

const pi=3.14
let radius=6
let p=pi*radius*radius
console.log("Area of the Circle with radius 6 is : ",p)
//same 
console.log("Area of the Circle with radius 6 is : "+p)

//4

console.log(typeof num2)
console.log(typeof person)

//5

let num3 = 0xff //hex
console.log(num3)
console.log(typeof num3)

//6

let num4= 15e10 //exponent
console.log(num4)

//7

let bool=5<6
console.log(bool)
 bool=5>6
console.log(bool)

console.log(typeof bool)

//8

let x=1
console.log(x,typeof x)
x='1' // used in cases were numbers took as input is not used for any arithmetic operation 
console.log(x,typeof x)

//9
let data = 2<3
console.log(data)

let data1="pen"
let data2="book"
let data3 = data1>data2
console.log(data3)

let data4="pen"
let data5="pencil"
let data6 = data4>data5
console.log(data6)

data4="pen"
data5="pencil"
data6 = data4<data5
console.log(data6)


data4="2"
data5= 1
data6 = data4<data5
console.log(data6)

data4="2"
data5= 3
data6 = data4<data5
console.log(data6)

data4="2"
data5= 2
data6 = data4<data5
console.log(data6)


data4="2"
data5= 2
data6 = data4==data5  //type is not checked
console.log(data6)

data4="2"
data5= 2
data6 = data4===data5  //type is checked
console.log(data6)

let a=1,b=3,c=5
let result=a<b && b<c   //AND
console.log(result)


a=1,b=3,c=0
result=a<b && b<c   
console.log(result)


a=1,b=3,c=0
result=a<b || b<c   //OR
console.log(result)


a=1,b=3,c=0
result=a<b && b<c   //OR
n=!result           //NOT
console.log(result,n)

let q=10;
let w=9;
if(q>w)
   console.log(q + " " +"is greater") 


q=82;
w=200;
let e=34;

if(q>w && q>e){
    console.log(q + " " +"is greater") 
}

else if(w>e)
{
    console.log(w + " " +"is greater")   
}

else{
    console.log(e + " " +"is greater")
}

let re
if (q%2==0) {
   re="even"
}
else
   re="odd"
console.log(re);

//ternary operator

q=5
re=q%2==0?"even": "odd"
console.log(re)

q=6
re=q%2==0?"even": "odd"
console.log(re)

//Template literal 

num1=2
num2=4
re=num1+num2
console.log(`The addion of ${num1} and ${num2} is ${re}`)


for(var i=0;i<10;i++){
    console.log(i)
}

 var arrr=["apple",12,34.5]
 console.log(arrr)
 console.log(arrr[0])
 console.log(arrr[1])
 console.log(arrr[2])
 console.log(arrr[3])

 var person={
     name:"ais",
     age:21,
     place:"tvm"
 }
 console.log(person)

 
// let res1 = document.getElementById("num1");
// let res2 = document.getElementById("num2");
// let result = document.getElementById("result");

// let num1 = prompt("number 1 is : ");
// let num2 = prompt("number 2 is : ");

// res1.innerHTML = num1;
// res2.innerHTML = num2;

// result.innerHTML = Number(num1) * Number(num2);



// let email="tariq@gmail.com";
// let password="1234567";
// let mobile="0592100103";
 
// if(email=="tariq@gmail.com")
// console.log("hello");
// else if(mobile=="0592100103")
// console.log("hello");
// else
// console.log("bye");


// for(let i=0;i<6;i++){
//     for(let j=0;j<6;j++){
//         console.log(`i is ${i} and j is ${j}`);
//     }
// }



// while ( true) {
//     console.log(`
//      1- add
//      2- sub
//      3- exit
//     `);
  
//     let option=1;
//     let number1=10,number2=20;
//     if(option=='1'){
//         console.log(number1+number2);
//     }else if(option=='2'){
//         console.log(number1-number2);
//     }else if(option=='3'){
//         break;
//     }else {
//         console.log("invlid option");
//     }
//  }
 




// let x = 10;
// let y = 20;
// let max = (x>y)? console.log(x):console.log(y);





// let list = document.getElementById("list");
// let result=``;
// for(let i=0;i<10;i++){
//  result +=`<li>ahmad</li>`;
// }
// list.innerHTML=result;


// function num(num1,num2){
//     console.log(num1*num2);
// }

// let n1 = prompt(" this is n1");
// let n2 = prompt("n2");
// num(n1,n2);





// function sayHello(number){
 
//     return ++number;
 
// }
// let x = 10;
// console.log(sayHello(x));
 


// let blbl = "my name is meedo";
// console.log(blbl.indexOf("meeedo"));




function copy(){
    let emailInput = document.getElementById("emailInput");
    let nameInput = document.getElementById("nameInput");
    let domainInput = document.getElementById("domainInput");


    // console.log(emailInput.value); 
    console.log(nameInput.value); 
    console.log(domainInput.value); 

    let cmopleteEmail = emailInput.value;

    if(cmopleteEmail.includes("@")==true){
let atIndex = cmopleteEmail.indexOf("@");
let sliceName = cmopleteEmail.slice(0,atIndex);
let sliceDomain = cmopleteEmail.slice(atIndex+1);
nameInput.value = sliceName;
domainInput.value = sliceDomain;
}
else{
    console.log("your email is wrong");
}






}
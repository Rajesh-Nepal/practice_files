
// let countEl = document.getElementById('count-el');
// let saveEl = document.getElementById('save-el');
// // DOM: Document = what we are intereacting is an html document
// // Object = taking html document into an object
// // model = representation
// let count =0;

// function increment(){
//     count=count+1;
//     countEl.innerText=count;
// }
// function save(){
//     let countStr = count + " + "
//     saveEl.textContent += countStr
//     console.log(count);
// }


let myPoints = 3
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints = myPoints+3;
}
function remove1Point(){
    myPoints=myPoints-1;
}
add3Points();
add3Points();
add3Points();
remove1Point();




// Call the functions to that the line below logs out 11
console.log(myPoints)
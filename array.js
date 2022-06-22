// var fruits = ['apple','orange','grapes','apple','orange','grapes']

// // to calculate index(inbuilt method)
// console.log('index of apple',fruits.indexOf('apple'));
// console.log('last index of apple',fruits.lastIndexOf('apple'));
// // if there are no items then it will show index = -1

// // length
// console.log('length of array',fruits.length);


// var cars =['honda'];
// // Inserting into arrays at first
// cars.unshift('bajaj')
// // Inserting into arrays at first
// cars.push('cbz')  //add and return length of array
// console.log(cars);

// // removing items from array
// // removig 1st item
// var firstItem = cars.shift();  //removes and return 1st item from array
// console.log("Removed 1st item is: ",firstItem);

// // removing from last
// var lastItem = cars.pop();
// console.log("last item is: ",lastItem);




// splice => splice is a method used to add or remove items in array
// cars = ['bmw','ferrari','maruti','tata']
// remove using splice
// var indexOfMaruti = cars.indexOf('maruti')
// cars.splice(indexOfMaruti,1) 
// // 1st arguement is index
// // 2nd arg is number of items to be removed starting from that index'
// // add using splice
// cars.splice(cars.indexOf('tata'),0,"ford") 
// console.log(cars);
// splice is recommended to remove items only to avoid confusion


// loop in array
// for in loop is recommended to use in objects only
cars = ['bmw','ferrari','maruti','tata']

// forEach loop
// does something to each items of an array
// doesnot return anything back
cars.forEach(function(item,i){
console.log('I will be invoked for each element in any array');
console.log('Item is>>',item);
console.log('Index is>>',i);
})



// filter
// it takes an array and checks each item in the array against some condition to see if its true or false
// filters something out
const three = [1,2,3];
const evens = three.filter(function(item){
    return (item%2===0);
})
console.log('even items',evens);



// reduce 

const sum = [1,2,3].reduce(function(result,item){
    return result+item;
},0);


// some checks if any item in the array meets the condition
const hasNegativeNum = [2,4,-6,3].some(function(item){
    return item<0;
})
console.log(hasNegativeNum);
// every checks if every item in the array meets the condition

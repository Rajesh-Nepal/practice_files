var students = [{
    name: 'ram',
    class: 2,
    house: 'blue',
    age:17
}, {
    name: 'shyam',
    class: 5,
    house: 'green',
    age:16
}, {
    name: 'ramesh',
    class: 2,
    house: 'green',
    age:18

}, {
    name: 'sita',
    class: 3,
    house: 'blue',
    age:16

}, {
    name: 'gita',
    class: 2,
    house: 'green',
    age:16

}, {
    name: 'abcd',
    class: 5,
    house: 'green',
    age:17

}]


const blueHouse = students.filter(function(item){
    if(item.house === "blue"){
        return true;
    }
})
console.log(blueHouse);

// map takes the item from the array, does something to it and put new thing back to same place in that array
// Instead of just filtering, we can create new array of anything from a current array using map

// names of students
const names = students.map(function(student){
    return student.name;
})
console.log(names);


// sum of ages
const ageSum = students.reduce(function(result,student){
return result + (student.age)
},0)
console.log('total sum of ages is>>',ageSum);
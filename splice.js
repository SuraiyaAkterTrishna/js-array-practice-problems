const friends = [12, 25, 37, 99, 88, 47, 66, 73, 84, 51];
const partial = friends.splice(3, 4, 88, 77, 66, 55);
console.log(partial);
console.log(friends);


//Removes elements from an array 
//if necessary, inserts new elements in their place
//returning the deleted elements
//will change the original array
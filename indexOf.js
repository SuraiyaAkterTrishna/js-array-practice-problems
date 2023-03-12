// find elements by indexOf
var friends = [11, 13, 14, 15, 16];
console.log(friends.indexOf(15)); //found 3
console.log(friends.indexOf(25)); //found -1, means not found

if(friends.indexOf(13) !== -1){
    console.log('Element exists in the friends array');
}
else {
    console.log('Element doesnot exist');
}

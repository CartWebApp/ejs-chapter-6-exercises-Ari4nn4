/*
The chapter mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method anymore because the object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/
function RangeSeq(from, to) {
 	var range = [];
 	for (var i = from; i <= to; i+= 1){
 		range.push(i);
 	}
 	ArraySeq.call(this, range);
 } 
 RangeSeq.prototype = Object.create(ArraySeq.prototype);

 function logFive(seqObj){
 	console.log(seqObj.current());
 	for (var i = 1; i <= 4; i+= 1)

let map = {one: true, two: true, hasOwnProperty: true};

// !!! Fix the call code below, do not modify the object above. !!!

console.log(map.hasOwnProperty("one"));
// → true

//convert minutes to seconds
function convert (minutes) {
    return minutes * 60;
}

//buggy code part 1
//fix the syntax errors
function cubes(a) {
	retunr a ** 3 //return misspelled
} //broken code
function cubes(a) {
	return a ** 3;
} //my solution (took a moment to figure out that ** is exponent operator)

//correct the mistakes
//broken code
function squaed(b) { //should be squared
	return a * a //has parameter a instead of b
}
//my solution
function squared(b) {
    return b * b;
}

//return first element in an array
function getFirstValue(arr) {
    return arr[0];
}

//basic variable assignment
//concatenate passed string 'name' with string 'edabit' and store as result
//broken code
function nameString(name){
	var b == "Edabit" 
	var result == name + b
  	return result
} //primary issue is = signs and lack of semi-colons
//my solution
function nameString(name) {
    let b = 'Edabit';
    let result = name + b;
    return result;
}

//and my free trial ran out...
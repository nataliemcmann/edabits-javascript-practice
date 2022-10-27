//Maximum edge of a triangle function
//finds max third edge of a triangle
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

//Power calculator function
//take voltage and current and returns power
function calcPower(voltage, current) {
    if (typeof voltage === "number" //ensure params are numbers 
        && typeof current === "number") //had to lookup typof syntax
        {
    return voltage * current
        } else {
            return 'Input voltage or current as a number'
        } 
} 

//Return next number from the interger passed
//function should take a number, increase it by one
//and return increased number
function addition(num) {
    return num + 1;
} //could add conditional statement that define typeof

//Return sum of two numbers
function addition(a,b) {
    return a+b;
}

//convert age to days
//should take age in years and return age in days
function calcAge(age) {
    if (age >= 0) //ensure age is positive integer
    {
        return age*365;
    } else {
        return 'Invalid age'
    }
}

//convert hours to seconds
function howManySeconds(hours) {
    let minutes = hours * 60;
    return minutes * 60;
}

//find perimeter of a rectangle
function findPerimeter(length, width) {
    return (length + width) * 2;
}

//return remainder from two numbers 
function remainder(x,y) {
    return x % y; //had to look up remainder operator
}

//Basketball points
//count points for a basketball game based on 
//number of 2 and 3 pointers scored
function points(twoPointers, threePointers) {
    let twos = twoPointers * 2;
    let threes = threePointers * 3;
    return twos + threes;
}

//less than 100?
//check if sum of two numbers is less than 100
function lessThan100(a, b) {
    if (a + b < 100) {
        return true
    } else {
        return false
    }
}

//Had time for ten challenges. All were very easy.
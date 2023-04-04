// Write a loop that makes seven calls to console.log to output the following triangle:
/*
#
##
###
####
#####
######
#######
*/

//my solution: 
let symbol = '';
for (let i=0; i <= 7; i++) {
    console.log(symbol);
    symbol += '#';
}

/*Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
for numbers divisible by only one of those). */

//my solution:
//create numbers array
let numbers = [];
for (let i=1; i <=100; i++){
    numbers.push(i);
}
//conditional console logs
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log('Fizz');
    } 
    if (numbers[i] % 5 === 0) {
        console.log('Buzz');
    }
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(numbers[i]);
    }
}


/* Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid 
there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size, outputting a grid of the 
given width and height.
*/

//this is tricky, but here's what I have so far...
let counter = 0;
let string = '';
let size = 8;
for (let i = 1; i <= (size); i++) {
    if (counter % 2 === 0) {
        for (let j = 0; j <= (size/2); j++) {
            string += ' ';
            string += '#';
            }
    } else {
        for (let j = 0; j <= (size/2); j++) {
            string += '#';
            string += ' ';
            }
    } 
    counter += 1;
    string += '\n'
    if (string.length = 64) {
        console.log(string);
    }
}
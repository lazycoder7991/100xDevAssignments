/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let t1 = new Date()   //Create new date object everytime we want to store a date. One instance stores date at that particular time only
    let sum
    
    t1 = t1.getTime()
    
    for(let i=0;i<n;i++)
        sum += i;

    
    let t2 = new Date()
    t2 = t2.getTime()
    
    
    return t2-t1;
}

console.log("Time taken(in ms) to sum till 100 - " + calculateTime(100))
console.log("Time taken(in ms) to sum till 100000 - " + calculateTime(100000))
console.log("Time taken(in ms) to sum till 100000000 - " + calculateTime(1000000000))
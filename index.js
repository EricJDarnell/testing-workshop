/**----------------UNIT TESTS:---------------------------- */

/** #1
 * function multiplication ()
 * returns a product of two input numbers.
 * 
 * expect multiplication(2,3) to be a number
 * expect multiplication(9,3) to be equal to 27
 * expect multiplication(0,5) to be 0
 * expect multiplication("word", 5) to return an error
 */

/** #2
 * A function called concatOdds()
 * takes two arrays of integers as arguments
 * 
 * It should return a single array that only contains the odd numbers
 * *eg concatOdds([3,2,1],[9,1,1,1,4,15,-1]);
 * *should result in [-1,1,3,9,15] now that it removes redundant entries
 * 
 * Think about the assumptions one makes writing this code.
 * *what happens with unexpected inputs? - if you put in an object? or a number?
 */

function concatOdds(array1,array2){
    //compile arrays
    const arrayBoth = [];
    array1.forEach((number)=> arrayBoth.push(number));
    array2.forEach((number)=> arrayBoth.push(number));
    arrayBoth.sort((a, b) => a - b); //  found solution to this on chatgpt4o
    // sort((a, b) => a - b) works! for if a > b, it will return a negative, and swap a and b as it sorts! lovely!
    const arrayFilter = arrayBoth.filter((number, index, self) => number % 2 !==0 && self.indexOf(number) === index);
    //filter down to odds
    ///&!!
    //remove redundant values
    return arrayFilter;
}
/**
 * expect concatOdds([3,2,1],[9,1,1,1,4,15,-1]) to return an array
 * expect concatOdds([3,2,1],[9,1,1,1,4,15,-1]) to return [-1,1,3,9,15]
 * expect concatOdds([3,2,1],"this guy...") to return an error 
 * expect concatOdds([6,8,4,2,12],[10,8,2,2,2,2]) to return an empty array []
 * 
 */
console.log(concatOdds([3,2,1],[9,1,1,1,4,15,-1]));
console.log(concatOdds([6,8,4,2,12],[10,8,2,2,2,2])); 
console.log(concatOdds([3,2,1],"this guy..."));

/***Functional Tests:
 * 
 * 1. A shopping cart 
 * When a guest user checks out with our shopping cart, they should be prompted to sign in or create an account
 * when a user checks out with an empty cart question existence, why must we suffer?
 * When a user continues on the checkout process an option to log in should be accessible
 * When a user checks out, have an option to split receipts and/or print gift receipts
 * When a member user is checking out, display loyalty/reward points, for use on treats.
 * When a user has multiples/duplicates of an item in cart, they can change the quantity.
 * When a user is checking out, have delivery/pickup options.
 */
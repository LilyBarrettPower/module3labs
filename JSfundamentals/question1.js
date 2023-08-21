// Question one - what will these statement do?
"" + 1 + 0 
// concatonate the two numbers together because of the string. "10"
console.log("" + 1 + 0)

"" - 1 + 0
// The negative sign means the numbers aren't treated as strings "-1"
console.log("" -1 + 0)

true + false
console.log(true + false)
// Returns 1 

!true
// will return false as the ! means not 
console.log(!true)

6 / "3"
// JS automatically converts strings to numbers when division sign is used
// return will be 2 
console.log(6/"3")

"2" * "3"
// same as above, return will be 6 
console.log("2"*"3")

4 + 5 + "px"
// return will be 9px 
console.log(4+5+"px")

"$" + 4 + 5
// return will be $45 as JS treates the numbers as strings as they are after a string 
console.log("$" + 4 + 5)

"4" - 2
// JS converts the string to a number as the subtraction sign is used 
console.log("4" - 2)

"4px" - 2
// px cannot be converted to a number so will return NaN
console.log("4px" - 2)

" -9 " + 5
console.log("-9" + 5)
// JS adds the two operands together as it acts as if 5 is a string

" -9 " - 5
// JS will act as if the -9 is a number due to implicit conversion when using the subtraction
console.log("-9" -5)

null + 1
// JS will return 1 
console.log(null + 1)

undefined + 1
console.log(undefined + 1)
// JS returns NaN

undefined == null
// JS will return true 
console.log(undefined==null)

undefined === null
// JS will return false 
console.log(undefined === null)

" \t \n" - 2
// this is a tab then a new line then a -2 so JS will return -2 
console.log("\t \n" -2)
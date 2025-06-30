let username = "taseen";

console.log(username.charAt(1));//gives character at position 1
console.log(username.indexOf("e"));//gives number of postion at e
console.log(username.lastIndexOf("e"));//gives number of postion of last e written in string
console.log(username.length);//gives the length of string
console.log(username.trim());//trims the extra space before or after the string
console.log(username.toUpperCase());//all string in upper case
console.log(username.repeat(3));//repeats the string 3 times
console.log(username.startsWith("t"));//its a boolean returns true or false and tells either some variable actually starts from this number in the perenthesis or not
console.log(username.endsWith("t"));
console.log(username.includes("t"));
let phoneNumber = "900-84-33-33"; //must be a string like written in double qoutes

phoneNumber = (phoneNumber.replaceAll("-" , ""));
console.log(phoneNumber);//("replace this" , "with this")

 phoneNumber1= phoneNumber.padStart(20,"0");//pad the starting of this string with zeros until its 20 character long
 console.log(phoneNumber1);

phoneNumber= phoneNumber.padEnd(20,"0");//pad the ending of this string with zeros until its 20 character long
console.log(phoneNumber);
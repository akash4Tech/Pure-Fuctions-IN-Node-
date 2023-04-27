// MAP 


// 1. Write a function that takes an array of numbers and returns a new array with each 
// number squared. Use the Map object to accomplish this. 

    //Square of the Array


    let arr= [1, 2, 3, 4, 5];
    console.log("Output 1 ",arr.map(e=>e*e));

    
// 2. Write a function that takes an array of objects with a name property and returns a new 
// array of strings with the name of each object capitalized. Use the Map object to 
// accomplish this. 




// 3. Write a function that takes an array of words and returns an object where the keys are 
// the words and the values are the number of times each word appears in the array. Use 
// the Map object to accomplish this.

    //number of word Occurs 

let  a= ['cap','rat','cap','map','cap','rat','cap','map','cap','rat','cap','map'];

const count = {};
a.map(e=>{count[e]=(count[e]||0)+1});
console.log("outpu 3:",count) ;


// 4. Write a function that takes a string and returns an object where the keys are the 
// characters in the string and the values are the number of times each character appears 
// in the string. Use the Map object to accomplish this. 


// 5. Write a function that takes an array of objects with a category property and returns an 
// object where the keys are the categories, and the values are arrays of objects with that 
// category. Use  


// 6. Write a function that takes an array of strings and returns a new array with only the 
// unique strings. Use the Map object to accomplish this. 


// 7. Write a function that takes an array of numbers and returns an object where the keys are 
// the numbers and the values are arrays of their prime factors. Use the Map object to 
// accomplish this. 


// 8. Write a function that takes an array of objects with a name and age property and returns 
// an object where the keys are the age and the values are arrays of objects with that age. 
// Use the Map object to accomplish this. 


// 9. Write a function that takes an array of strings and returns an object where the keys are 
// the strings sorted alphabetically and the values are arrays of the original strings that are 
// anagrams of each other. Use the Map object to accomplish this. 


// 10. Write a function that takes an array of objects with a date property and returns an object 
// where the keys are the year and the values are arrays of objects with that year. Use the 
// Map object to accomplish this. 
 
 
 
 
 
 
 
 

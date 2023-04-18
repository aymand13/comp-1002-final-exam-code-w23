// Step 1: Write a multi-line comment detailing your name and student number
/*
Name: Lekhan Puhania
Student Number: 200540079
*/

// Step 2: Add the 3 people's names to the array
myImmutableArray.push("Alice", "Bob", "Charlie");

// Step 3: Print the array to the console
console.log(myImmutableArray);

// Step 4: Remove the first array item from the array
myImmutableArray.shift();

// Step 5: Remove the second array item from the array
myImmutableArray.splice(1, 1);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
const filteredArray = myImmutableArray.filter(name => !name.startsWith("J"));

// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-5555";
const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", function() {
alert("Call me now at 999-999-9999");
});
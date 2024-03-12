// Helper function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    // Generate a random number between 1 and 100
    const randomNumber = getRandomInt(1, 100);
  
    // Check if the random number is even or odd
    if (isEven(randomNumber)) {
      console.log(randomNumber + " is even.");
    } else {
      console.log(randomNumber + " is odd.");
    }
  }
  
  // Call the main function to execute the code
  main();
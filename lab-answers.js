console.log('Lab Answers');

// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
 console.log(i)
}
// 

// Get Even
// 2. Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
// Get Even Answered

// Fizz Buzz
// 3. Write a javascript application that logs all numbers from 1 - 100.
// 4. If a number is divisible by 3 log "Fizz" instead of the number.
// 5. If a number is divisible by 5 log "Buzz" instead of the number.
// 6. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 ===0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
// Fizz Buzz Answered

// Wild Wild Life
// 7. Use the following arrays to answer the questions below (name, species ,age, hometown):
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
// 7a. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001
console.log(plantee)
// 7b. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = 'Gotham City'
console.log(wolfy)
// 7c. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins")
console.log(dart)

// 8. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift()

wolfy.unshift('Gameboy')
console.log(wolfy)
// wild wild life answered

// Yell at the Ninja Turtles
// 9. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// 10. Use a for loop to call .toUpperCase() on each of them and print out the result.
for (let i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase())
}
// Yell at the Ninja Turtles Answered

// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// 11. Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'))
// 12. Use the .sort method.
favMovies.sort()
console.log(favMovies)
// 13. Use the method pop
favMovies.pop()
console.log(favMovies)
// 14. Push "Guardians of the Galaxy"
favMovies.push('Guardians of the Galaxy')
console.log(favMovies)
// 15. Reverse the array
favMovies.reverse()
console.log(favMovies)
// 16. Use the shift 
favMovies.shift()
console.log(favMovies)
// 17. Unshift - what does it return?
favMovies.unshift()
console.log(favMovies)
// 18. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained").
favMovies.splice(3, 1, 'Avatar')
console.log(favMovies)
// 19. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
const favMovies2 = favMovies.slice(8, 16)
console.log(favMovies2)
// 20. store the value of your slice in a variable, console.log it
console.log(favMovies2)
// Methods, Revisited Answered


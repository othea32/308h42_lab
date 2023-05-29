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
// Methods Revisited Answered

// Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
// 21. Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)
// 22. Change "Neff" to "No One"
whereIsWaldo[1][2] = 'No One'
console.log(whereIsWaldo)
// 23. Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1])
// Where is Waldo Answered

// Excited Kitten
// 24. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 0; i < 20; i++) {
  console.log('Love me, pet me! HSSSSSS!')
}
// 25. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
const catPhrases = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...']
for (let i = 0; i < 20; i++) {
  console.log('Love me, pet me! HSSSSSS!')
  if (i % 2 === 0) {
    console.log(catPhrases[Math.floor(Math.random() * catPhrases.length)])
  }
}
// Excited Kitten Answered

// Find the Median
// 26. Find the median number in the following nums array, then console.log that number.

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort()
console.log(nums[Math.floor(nums.length / 2)])
// Find the Median Answered












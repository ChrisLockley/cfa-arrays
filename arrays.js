//1 create an array of strings (has to be of at least length 10)
//2 print out the second element in the array
//3 print out the length of the array
//4 remove the last element from the array and then console.log the array
//5 remove the first element from the array and then console.log the array
//6 add a string to the end of the array and then console.log the array
//7 add a string to the beginning of the array and then console.log the array

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num[1])
console.log(num.length)

num[6] = "reassigned"
console.log(num.length)

num.push(11)
console.log(num)


//8 create another array of 6 veggies 
//create a variable called twoVeggies and set it equal to slicing the veggies array and getting the middle two elements
//ex [1, 3, 4, 5, 7, 8] and getting the two middle elements would be [4, 5]

let veggies = ["carrot", "potato", "tomato", "broccoli", "spinach", "peas"]
let twoVeggies = veggies[1, 5]
console.log(twoVeggies)

//9 create another array of 4 fruits
//create a fruits and veggies array and assign it to concatinating the veggies array above and the fruits array

//10 get the index of one the fruits or veggies in your fruitsAndveggies array

// arrays

let games = ["halo", "zelda", "skyrim", "cod"];
console.log(games[1]);

let index = 2;
console.log(games[index]);

games[0] = "mario kart";
console.log(games);

console.log(games. length);

games.push("halo");
console.log(games);

games.pop();
console.log(games);

// create an array

let drugs = ["weed", "nic", "lean", "liq", "zans"]
console.log(drugs[2]);
console.log(games.length);

drugs.push("oxi")
console.log(drugs)

// create getLength function, take array as param, and return length

const getLength = (array) => {
  return array.length
}
console.log('invoked getLength function ', getLength([1,2,3,4,5]))

num.unshift('added to front')
console.log('used unshift to add to the front ', num)

let seasons = ["winder", "summer", "fall"]
console.log(seasons)

let newSeason = "spring"
seasons.unshift("spring")
console.log(seasons)

num.shift();
console.log("using shift to remove first ele ", num);

// slice

let arrayOfChars = ["a", " ", "f", "o", "l", "g"];
let sliceOfArray = arrayOfChars.slice(2, 6)
console.log("slicing a portion of the array from before index 1, to before index 6", sliceOfArray)

let phrase = arrayOfChars.slice(2, 6);
console.log("sliced portion of phrases ", phrase)

// array of sports

let sport = ["bball", "soccer", "football", "eating"]
sport.unshift("tennis")
console.log("sports array with new ele added to the front ", sport)

sport.pop()
console.log("sports array with last ele removed ", sport)

// concat

let ar1 = [1, 2, 3]
let ar2 = ["a", "b", "c"]
let ar3 = ["do", "re", "mi"]

let resultOfConcat = ar1.concat(ar2)
console.log("concat ar1 with ar2 ", resultOfConcat)

let ar1Andar2 = ar1.concat(ar2)
console.log("concat ar1 with ar2 ", ar1Andar2)

console.log("og arrays are uneffected ", ar1)

let allArs = ar1Andar2.concat(ar3)
console.log("result of concatinatingar1Andar2 arraw with ar 3 ", allArs)

let joinedOnNothing = ["a", "b", "c"].join(" ")
console.log("result of turning joinedOnNothing array into a string ", joinedOnNothing)

let joinedOnEmptyString = ["a", "b", "c"].join('')
console.log("joined on an empty string ", joinedOnEmptyString)

var joinedOnAString = ["a", "b", "c"].join("+")
console.log("joined on a string ", joinedOnAString)

//ingredient index

let ingredient = ["butter", "sugar", "flour", "chocolate chip"]
let indexOfsugar = ingredient.indexOf("sugar")
console.log("index of sugar ", joinedOnAString)

let indexOfMilk = ingredient.indexOf("milk")
console.log("index of milk ", indexOfMilk)

let panda = ["p", "a", "n", "d", "a"]
console.log("turning panda array into strong ", panda.join(" "))

console.log("get the indexOf the letter d ", panda.indexOf("d"))

// create function getBiggerArray and check if array1 >/</= array2

const getBiggerArray = (array1, array2) => {
  if (array1.length > array2.length) {
    return array1;
  } 
  else if (array1.length = array2.length) {
    return "theyre equal"
  } 
  else {
    return array2;
  }
}
console.log(getBiggerArray([1,2,4,5,6], [3,4]))

// nested array

let colors = [[1,2,3], [4,5,6], [7,8,9]]
console.log("second inner aray elle", colors[1])
console.log("first ele inside second inner array ele ", colors[1][1])

console.log("pring out 1, 8, and 9", colors[0][0], colors[2][1], colors[2][2])
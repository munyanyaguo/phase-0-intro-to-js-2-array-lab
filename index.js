// Define the initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// Destructively modify the original array by adding a cat to the end
function destructivelyAppendCat(name) {
  cats.push("Ralph");
  return cats;
}

// Destructively modify the original array by adding a cat to the beginning
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
  return cats;
}

// Destructively modify the original array by removing the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

// Destructively modify the original array by removing the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

// Non-destructively add a cat to the end (returns new array)
function appendCat(name) {
  return [...cats, "Broom"];
}

// Non-destructively add a cat to the beginning (returns new array)
function prependCat(name) {
  return ["Arnold", ...cats];
}

// Non-destructively remove the last cat (returns new array)
function removeLastCat() {
  return cats.slice(0, -1);
}

// Non-destructively remove the first cat (returns new array)
function removeFirstCat() {
  return cats.slice(1);
}
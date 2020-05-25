let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// returns a URL-friendly version of a string (no spaces)
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));
console.log("----------------");

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));
console.log("----------------");

// https: Functional version
function functionalUrlsHTTPS(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(functionalUrlsHTTPS(states));
console.log("----------------");

// singles: imperative version
function imperativeSingles(items) {
  let singles = [];
  items.forEach(function (item) {
    if (item.split(/\s+/).length === 1) {
      singles.push(item);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));
console.log("----------------");

// singles: functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));
console.log("----------------");

function filterDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(filterDakota(states));
console.log("----------------");

function filterLength(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(filterLength(states));
console.log("----------------");

/* sample run

(base) [js_tutorial]$ node functional.js
[ 'kansas', 'nebraska', 'north-dakota', 'south-dakota' ]
----------------
[ 'kansas', 'nebraska', 'north-dakota', 'south-dakota' ]
----------------
[
  'https://example.com/kansas',
  'https://example.com/nebraska',
  'https://example.com/north-dakota',
  'https://example.com/south-dakota'
]
----------------
[ 'Kansas', 'Nebraska' ]
----------------
[ 'Kansas', 'Nebraska' ]
----------------
[ 'North Dakota', 'South Dakota' ]
----------------
[ 'North Dakota', 'South Dakota' ]
----------------

*/

let numbers = [1,2,3,4,5,6,7,8,9,10];
// sum: imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));
console.log("----------------");

/*
The reduce method takes a function of two arguments, the first of which is
an accumulator for the result, and the second of which is the array element
itself. The return value of the (anonymous) function gets passed back to reduce
as the starting value for the next element in the array. The second argument is
the initial value of the accumulator (in this case, 0).
*/
// sum: functional solution
// first version:
function functionalSum1(elements) {
  return elements.reduce((total,n) => {
    return total += n;
  },0); // the 0 is initializes total
}
console.log(functionalSum1(numbers));

// second version
// Note: initial value of the accumulator is set to 0 by default.
function functionalSum2(elements) {
  return elements.reduce((total,n) => { return total += n; });
}
console.log(functionalSum2(numbers));
console.log("----------------");

// lengths: imperative version
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));
console.log("----------------");

// lengths: functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths,element) => {lengths[element] = element.length; return lengths;}, {}); // note that lengths is initialized to an empty hash, not 0
}
console.log(functionalLengths(states));
console.log("----------------");

function functionalProduct(elements) {
  return elements.reduce((total,n) => { return total *= n; },1);
}
console.log(functionalProduct(numbers));
console.log("----------------");

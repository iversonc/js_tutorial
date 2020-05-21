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

// urls: Functional version
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

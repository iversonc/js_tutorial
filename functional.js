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

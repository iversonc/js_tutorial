let a = ["ant","bat","cat",42];

a.forEach(function(element) {
  console.log(element);
});

console.log("----------");

a.forEach((item) => {
  console.log(item);
});

console.log("----------");

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

console.log("----------");

let d = [17,99,42,8];
d.sort(function (b, c) {
  return b-c;
});
d.forEach((x) => {
  log.console(x);
});

console.log("----------");

let e = [17,99,42,8];
e.sort((b, c) => {
  return b-c;
});
e.forEach((x) => {
  console.log(x);
});

let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});
a.forEach((element) => {
  console.log(element);
});


let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});
Array.from(soliloquy).forEach((character) => {
  console.log(character);
});

let ar = [99, 17, 42, 8];
ar.sort(function(a, b) { console.log( a - b ); return a - b; });
ar.forEach((num) => {
  console.log(num);
});

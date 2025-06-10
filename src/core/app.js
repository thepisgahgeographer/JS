// This file is the entry point of the application. It contains the main logic for the JavaScript boilerplate app, including any initial setup or function calls.

function main() {
    console.log("Welcome to the JS Boilerplate App!");
    
}

let arithemtic = 100 + 4 * 11;
let modulo = 312.5 % 100;
let test = "concat" + "enate";
let temp_literal = `This is a template literal with a variable: ${arithemtic} and ${modulo}`;

let logical = true || false && false;
let order = 1 + 1 == 2 && 1 * 10 > 50;



document.addEventListener('DOMContentLoaded', function () {
  // const btn = document.getElementById('getScreenSizeBtn');
  const result = document.getElementById('screenSizeResult');
  // btn.addEventListener('click', function () {
  //   const width = window.screen.width;
  //   const height = window.screen.height;
  //   result.textContent = `Screen size: ${width} x ${height} pixels`;
  
  // });

  // result.textContent = test;
  result.textContent = temp_literal;
  result.textContent = (-(10-2));
  result.textContent = order;
  result.textContent = (logical > order ? 1 : 2);
});

// main();




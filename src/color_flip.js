// const colors = [
//     "red",
//     "green",
//     "rgba(0, 0, 255, 0.5)",
//     "#ff00ff"
// ];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function() {
//     const randomNumber = 2;
//     document.body.style.backgroundColor = colors[randomNumber];
// });

// const test = document.getElementById("container");
// test.style.backgroundColor = "red";


// const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     const colors = [
//         "red",
//         "green",
//         "rgba(0, 0, 255, 0.5)",
//         "#ff00ff"
//     ];

//     const test = document.getElementById("container");
//     test.style.backgroundColor = colors[2]; // Change to blue color
//     console.log("Button clicked, background color changed to blue");
// });


const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    const colors = [
        "red",
        "green",
        "rgba(0, 0, 255, 0.5)",
        "#ff00ff"
    ];

    document.body.style.backgroundColor = colors[2]; // Change to blue color
    console.log("Button clicked, background color changed to blue");
});



// const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
//
// let text = "";
//
// text += '<section><h2>' + cars[0] + '</h2></section>';
// text += '<section><h2>' + cars[1] + '</h2></section>';
// text += '<section><h2>' + cars[2] + '</h2></section>';
// text += '<section><h2>' + cars[3] + '</h2></section>';
// text += '<section><h2>' + cars[4] + '</h2></section>';
//
// console.log(text);

const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = ''
for (let i = 0; i < cars2.length; i++) {
    text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
let colour = ["red", "blue", "green", "orange"];
let i = 0;
while (i <= colour.length-1){
    console.log(colour[i]);
    i++;}

for (j=0; j<=colour.length-1; j++){
    console.log(colour[j]);}

colour.forEach(element => console.log(element));

/*
1. 4 lines
2. 2 lines
3. 1 line
*/

let fruit = {
    fruitName: "aardbei",
    fruitSize: "big",
    fruitColor: "red"
}
//4

for (const key in fruit){
    console.log(`${key}: ${fruit[key]}`);
}
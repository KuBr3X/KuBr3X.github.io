// //.Opg 1 tæl ned fra 10 med while løkke
// let i = 10
// while(i >= 1){
//     console.log(i);
//     i--;
// }

// //.Opg 1 tæl ned fra 10 med for løkke
// console.log("opg 1 for loop")
// for(let i = 10;i >= 0;i--){
//     console.log(i);
// }

    
//.opg. 2 læg sammen til 20: 1+2+3...+20
// console.log("opg 2")
// let sum = 0;
// let tal = 1;
// while (tal <= 20){
// sum += tal
// console.log(sum)
//     tal++;
// }


//.for(INIT ; COND ; STEP)
//. Do something

// console.log("opg2 for løkke")
// sum = 0
// for (let tal=1; tal<=20;tal++){
// sum += tal;
// }
// console.log(sum)


for(let tabelNr=2; tabelNr<=10;tabelNr++){

console.log("opg 3 for løkke:"+tabelNr)
for (let tal=1; tal<=10;tal++){
    let value=tal*tabelNr
console.log(value)
}
}

//.y=3x^2+6x+9
//. beregn for x: 0,10,20...100
console.log("opg 4")
for(let x =0; x <=100; x+=10){
    let y = 3*x*x+6*x+9
    console.log(x+" : "+y);
}

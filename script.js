alert("Hello World");
console.log("Hello World");

// FOR loop \\

//for(variable; condition; operation)

/*
//number sequence
for(let i = 0; i < 5; i++){
    console.log(i);
}

//string sequence
for(let i = 0;i < 5; i++){
    console.log("Hello World");
}
*/

// ITERATE ARRAY \\

let names = ["Kan","Ken","Kin","Kon","Kun"];
//forward
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
//reverse
for(let i = names.length-1; i >= 0; i--){
    console.log(names[i]);
}
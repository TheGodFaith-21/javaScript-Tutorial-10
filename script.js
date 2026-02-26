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
/*
let names = ["Kan","Ken","Kin","Kon","Kun"];
//forward
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
//reverse
for(let i = names.length-1; i >= 0; i--){
    console.log(names[i]);
}
    */

// BREAK keyword \\
/*
let names = ["Kan","Ken","Kin","Kon","Kun"];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);

    if(i === 3){
        break;
    }
}

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    break;
}
*/

// FOR / IN LOOP \\
/*
let names = ["lan", "len", "lin", "lon", "lun"];
//declaring index
for(let i in names){
    console.log(names[i]);
}
*/

// FOR/OF LOOP \\
/*
let names = ["yam","yem","yim","yom","yum"];

//declaring variable array
for(let x of names){
    console.log(x);
}
//declaring index
for(let x in names){
    console.log(x);
}

//declaring with number before names.
for(let x in names){
    console.log(`${parseInt(x)+1}. ${names[x]}`);
}

let i = 1;
for(let x of names){
    console.log(`${i}. ${x}`);
    i++;
}
*/

// TUTORIAL CHALLANGE \\

const names = ["Tan","Ten","Tin","Ton","Tun"];

const searchNames = "Ton";

let x = false;
/*
//search base on index number
for(let i = searchNames; i < names.length;i++){
    x = true;
    console.log(`Found ${names[i]}`);
    break;
}if(!x) console.log("Not Found!");
*/

for(let i = 0; i < names.length;i++){
    if(names[i] === searchNames){
        x = true;
        break;
    }
}
    if (x) {
        console.log(`found ${searchNames}`);
    }else{
        console.log(`not found`);
    }



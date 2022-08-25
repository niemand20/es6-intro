// function add(first,second){
//     console.log(first,second);
        // check for NaN condition
//     // if (second===undefined){
//     //     second = 0;}
//     // second = second||0;
    
    
//     const total = first+second;
//     return total;
// }

// // const result = add(10,20);
// // console.log(result);
// const result = add(10);
// console.log(result);

function add(first, second = 38){
    const total = first+second;
    return total;
}
// const result = add(12);
const result = add(12, 12);
console.log(result);

function fullName(first, last){
    const name = first+" "+last;
    return name;
}

const name = fullName("mof", "iz")
console.log(name);
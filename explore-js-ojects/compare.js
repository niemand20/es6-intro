// const first =  1;
// const second = 2;
// if (first === second){
//     console.log("they are same");
// }
// else{
//     console.log("they are not same");
// }

// const first =  {a:2};
// const second = {a:2};
// const third = second;


// if (third=== second){
//     console.log("they are same");
// }
// else{
//     console.log("they are not same");
// }
// <------------------------->


//do not use this method to compare an object or array

// const first =  {a:2,b:5, c:9};
// const second = {a:2,b:5, c:9};
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// if(firstString===secondString){
//     console.log("they are same")
// }
// else{
//     console.log("they are different")
// }
// <------------------------->

//changing order
// const first =  {a:2, c:9, b:5};
// const second = {a:2, b:5, c:9};
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// if(firstString===secondString){
//     console.log("they are same")
// }
// else{
//     console.log("they are different")
// }

// <------------------------->


const first =  {a:2, b:5 , c:9,d:1};
const second = {a:2,  b:5 , c:9 };

function compareObjects(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length){
        for (const key of  firstKeys) {
            // console.log(key);
            if(first[key]!==second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
   
}

const isSame = compareObjects(first,second)
console.log(isSame);
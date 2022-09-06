fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data => console.log(data))
.catch(error => console.log(error));

try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
}







console.log(1);
setTimeout(()=>{
    console.log(2);
},2000);
console.log(3);
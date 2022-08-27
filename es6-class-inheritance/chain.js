const users = [{id:1, name: 'abul', profession:'doctor'}];
// console.log(users.name);
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [{id:1, name: 'abul', profession:'leader'},
    {id:2, name: 'kabul', profession:'leader'}
        
    ]
};
// console.log(data);
// console.log(data.data);
// console.log(data.data[0].id, data.data[0].name, data.data[0].profession);
// console.log(data.data[1].id, data.data[1].name, data.data[1].profession);

const user = {
    id: 2001,
    name: "thomas alva adison",
    address:{
        street:{
            fist: "23/A kochukhet",
            second: "34/C Mulakhet",
            third: "3rd"
        },
        postOffice: "cantonmanet",
        city: "Dhaka",
    }
}
//optional chain
const useFloor =user.address.stret?.third 
console.log(useFloor);

// console.log(user.address.street.third);
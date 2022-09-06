const loadPhones = async(searchText,dataLimit)=>{
    const url =  `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data =await res.json();
    displayPhones(data.data ,dataLimit);

}

const displayPhones = (phones,dataLimit) =>{
    const phonesContainer = document.getElementById("phones-container");
    phonesContainer.textContent="";
    //display 10 phones only
    const showAll  = document.getElementById("show-all");
    if (dataLimit && phones.length>10){
        phones = phones.slice(0,10);
        
        showAll.classList.remove("d-none");
    }
    else{
        showAll.classList.add("d-none");
    }
    //display no phone Found
    const noPhone = document.getElementById("no-found-message");
    if(phones.length===0){
        noPhone.classList.remove("d-none")
    }
    else{
        noPhone.classList.add("d-none")
    }
    //display all phone found
    phones.forEach(phone  =>{
        const phoneDiv = document.createElement("div");
            phoneDiv.classList.add("col");
            phoneDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text ">
                        This is a longer card with supporting text below as a   natural   lead-in to additional content. This content is a    little bit   longer.
                    </p>
                    <a onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</a>
                </div>
            </div>
        `
        phonesContainer.appendChild(phoneDiv);
    })
    //stop spinner or loader
    toggleSpinner(false);
   
}

const processSeacrh =(dataLimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

//handle search btn click
document.getElementById("btn-search").addEventListener("click", function (){
    //start loader
    processSeacrh(10);
})

//search by pressing enter key
document.getElementById("search-field").addEventListener("keydown", function(e){
   //console.log(e.key)
    if(e.key==="Enter"){
        processSeacrh(10);
    }
});

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById("loader");
    if(isLoading){
        loaderSection.classList.remove("d-none");
    }
    else{
        loaderSection.classList.add("d-none");
    }
}

//not the best way to load show all
document.getElementById("btn-show-all").addEventListener("click",function(){
    processSeacrh();
})

const loadPhoneDetails =async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);

}

const displayPhoneDetails = phone =>{
    console.log(phone);
    const modalTitle = document.getElementById("phoneDetailModalLabel");
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById("phone-details");
    phoneDetails.innerHTML =`
    <p>Release date: ${phone.releaseDate? phone.releaseDate : "No release date found"}</p>
    <p>Main Features: ${phone.mainFeatures? phone.mainFeatures.storage: "No storage found"}</p>
    <p>Others: ${phone.others? phone.others.Bluetooth: "No bluetooth feature found"}</p>
    `
}


loadPhones("apple");
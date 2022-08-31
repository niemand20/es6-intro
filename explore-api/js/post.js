function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}

// 1.get the container where you want to add new elements
//2.create child elements 
//3.set innerText or innerHTML 
//4.appendChild




function displayPosts(posts){
    //1.
    const postContainer = document.getElementById("post-container");

    for (const post of posts){
        //2.
        const postDiv = document.createElement("div");
        postDiv.classList.add("post")
        // console.log(post);
        //3.
        postDiv.innerHTML = `
        <h4>User- ${post.id}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `
        //4.
        postContainer.appendChild(postDiv);
    }
}

loadPosts();
const loadMeals= search =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById("meal-container");
    meals.forEach(meal=>{
        console.log(meal);
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("col");
        mealDiv.innerHTML =`
        <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h5 class="card-title">Meal ${meal.strMeal}</h5>
                       <p class="card-text">Details: ${meal.strInstructions.slice(0,200)}</p>
                    </div>
                  </div>
        `
        mealsContainer.appendChild(mealDiv);
    });
};


loadMeals("rice");
// loadMeals("fish");

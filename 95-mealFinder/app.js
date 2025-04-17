console.log('script added');
const searchMeal = async (e) => {
    e.preventDefault();
    const input = document.querySelector('.input');
    const title = document.querySelector('.title');
    const info = document.querySelector('.info');
    const img = document.querySelector('.img');
    const ingredientsOutput = document.querySelector('.ingredients');

    const fetchMealData = async (val) => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/seach.php?${val}`);
        const {meals} = await res.json();
        return meals;
    };
    const showMealInfo = (meal) => {
        const {strMeal, strMealThumb, strInstructions} = meal;
        title.textContent = strMeal;
        img.style.backgroundImage = `url(${strMealThumb})`;
        info.textContent = strInstructions;
        const ingredients = [];
        for (let i = 1; i <= 20; i++){
            if(meal[`strIngredient${i}`]){
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
            }
            else{
                break;
            }
        }
        const html = `
            <span>${ingredients.map((ing) => `<li class = 'ing'>${ing}</li>`).join("")}</span>
        `
        ingredientsOutput.innerhtml = html;
    };
    const showAlert = () => {
        alert('Meal Not Found!');
    }
    const val = input.value.trim();
    if (val){
        const meals = await fetchMealData(val);
        if (!meals){
            showAlert();
            return;
        }
        meals.forEach(showMealInfo);
    }
    else{
        alert('Please try searching for meal');
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', searchMeal);
const magnifier = document.querySelector('.magnifier');
magnifier.addEventListener('search', searchMeal);

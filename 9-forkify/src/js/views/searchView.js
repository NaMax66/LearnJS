import {elements} from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () =>{
    elements.searchResList.innerHTML = ''; //dell all html in te element
};
//'Pasta with tomato and spinach'
//acc:0 / acc +cur.length = 5 // newTitle = ['Pasta']
//acc:5 / acc +cur.length = 9 // newTitle = ['Pasta','with']

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle =[];//we can adding stuff to constant array
    if(title.length > limit){
        title.split(' ').reduce((acc, cur)=>{
            if (acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`
    }
    return title;
};


const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}"> <!--recipe id-->
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup)
};


export const renderResults = recipes => {
    recipes.forEach(renderRecipe) //reduction of el => renderRecipe(el)
};
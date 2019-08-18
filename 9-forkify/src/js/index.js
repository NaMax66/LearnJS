import {elements, renderLoader, clearLoader} from "./views/base";

import Search from "./modules/Search";
import Recipe from "./modules/Recipe";
import List from "./modules/List";

import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView'

//query and result both stored in a search object

/*global state of the app
* - search object
* - current recipe obj
* - shoping list obj
* - liked recipes
* */
const state = {};
window.state = state;
/**
 * Search controller
 * @returns {Promise<void>}
 */
const controlSearch = async () =>{
  //1) get the query from the view
  const query = searchView.getInput();


  if(query){
      //2) new search obj and add to state
      state.search = new Search(query);
      //3) Prepare UI for results
      searchView.clearInput();
      searchView.clearResults();
      renderLoader(elements.searchRes);

      try {
          //4)Search for recipes
          await state.search.getResults(); //here we should wait

          //5) Render results on UI
          clearLoader();
          searchView.renderResults(state.search.result)
      }catch (e) {
          console.log(e);
          alert('smth with the lodader');
          clearLoader();
      }

  }
};

elements.searchForm.addEventListener('submit', e =>{
   e.preventDefault();
   controlSearch();
});

elements.searchResPages.addEventListener('click', e =>{
    const btn = e.target.closest('.btn-inline');
    if (btn){
        //get data from attribute data-goto
        const goToPage = parseInt(btn.dataset.goto, 10); //base 10
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);

    }
});

/**
 * Recipe controller
 */

//it is in the console
const controlRecipe = async () => {

    //get id from url
    const id = window.location.hash.replace('#','');
    if (id) {
        //prepare UI
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //highlight selected

        if(state.search) searchView.highlightSelected(id);

        //create new recipe obj
        state.recipe = new Recipe(id);

        //TODO: testing
        window.r = state.recipe;

        try {
            //get recipe data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //calc servings and time

            state.recipe.calcTime();
            state.recipe.calcServings();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (e) {
            console.log(e);

        }

    }
};

//window.addEventListener('hashchange', controlRecipe);

//if user add the bookmark
//window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * LIST CONTROLLER
 */

const controlList = () => {
    //create new if there it none yet
    if (!state.list) state.list = new List();

    //Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    })
};

//Handle delete and update list item events
elements.shopping.addEventListener('click', event => {
    //read id from the closest shopping item
    const id = event.target.closest('.shopping__item').dataset.itemid;

    //Handle the delete
    if (e.target.matches('.shopping__delete, .shopping__delete *')){
        //delete from state
        state.list.deleteItem(id);
        //delete from ui
        listView.deleteItem(id);

        //handle the count update
        //TODO: understand how is it working?
    } else if(e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

// Handling recipe btn clicks
elements.recipe.addEventListener('click', e =>{
   if (e.target.matches('.btn-decrease, .btn-decrease *')) { //* point to any child element
       if (state.recipe.servings > 1){
           state.recipe.updateServings('dec');
           recipeView.updateServingsIngrediens(state.recipe);
       }
   } else if (e.target.matches('.btn-increase, .btn-increase *')) {
       state.recipe.updateServings('inc');
       recipeView.updateServingsIngrediens(state.recipe);
   } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
       controlList();
   }
   console.log(state.recipe);
});

const l = new List();

window.l = l;

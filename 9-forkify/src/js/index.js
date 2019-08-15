import Search from "./modules/Search";
import {elements} from "./views/base";
import * as searchView from './views/searchView'
//query and result both stored in a search object

/*global state of the app
* - search object
* - current recipe obj
* - shoping list obj
* - liked recipes
* */
const state = {};

const controlSearch = async () =>{
  //1) get the query from the view
  const query = searchView.getInput();

  if(query){
      //2) new search obj and add to state
      state.search = new Search(query);
      //3) Prepare UI for results
      searchView.clearInput();
      searchView.clearResults();


      //4)Search for recipes
      await state.search.getResults(); //here we should wait

      //5) Render results on UI
      searchView.renderResults(state.search.result)
  }
};

elements.searchForm.addEventListener('submit', e =>{
   e.preventDefault();
   controlSearch();
});



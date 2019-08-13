function getRecipe() {
    setTimeout(()=>{
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID); //simulate server

        setTimeout(id=>{ //get the recipe
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            //we want some new info from the same publisher
            setTimeout(publisher =>{
                const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe);
            }, 1500, recipe.publisher);

        }, 1500, recipeID[2]); //this will be the id parameter

    }, 1500);
}
//Three callbacks nested inside another. Three chained ajax calls
getRecipe();
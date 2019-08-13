//async/await - ES8 version of promise
//produce the same way

const getIDs = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //some request
        resolve([523, 883, 432, 974]);
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject)=>{
        setTimeout(ID =>{
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);

    });
};
const getRelated = publisher => {
    return new Promise(((resolve, reject) => {
        setTimeout(pub =>{
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas Shmedtmann'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    }))
};

async function getRecipesAW() {
    const IDs = await getIDs; //await will really stop the code from executing until the promise will resolved
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas Shmedtmann');
    console.log(related);
    
    return recipe;
}

//const rec = getRecipesAW(); //we fire of the function and it is running asynchronously
//console.log(rec);//it doesnt work

getRecipesAW().then(result => console.log(`${result} is the best ever`));
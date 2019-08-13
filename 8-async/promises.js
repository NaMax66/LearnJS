const getIDs = new Promise((resolve, reject)=>{ //put two func as a parameters
    //executor
    setTimeout(()=>{
        //some request
        resolve([523, 883, 432, 974]);
        //reject([523, 883, 432, 974]);//by using reject we mark this promise as rejected
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
//we need to know publisher before we get it
const getRelated = publisher => {
    return new Promise(((resolve, reject) => {
        setTimeout(pub =>{
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas Shmedtmann'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    }))
};

//consume
getIDs
    .then(IDs => { //argument IDs is the result of the successful promise
    console.log(IDs);
    return getRecipe(IDs[2]); //this return a promise
})//this method works if our promise is resolved
    .then(recipe => {
        console.log(recipe)
        return getRelated('Jonas');
    })
    .then(recipe => {
        console.log(recipe);
    })
    .catch(error => {
        console.log('Error');
    });
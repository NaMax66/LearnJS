function getWeather(woeid) {
    fetch //returns promise
    (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`) //url where API is available
        .then(result => {
            console.log(result);
            return result.json(); //also async method
        }) //most of the time we consume promises and not to produce them
        .then(data => {
            //console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
        })
        .catch(error => console.log(error));
}

getWeather(44418);//London
getWeather(2487956);//San Francisco

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

//getWeather(44418);//London
//getWeather(2487956);//San Francisco

async function getWeatherAW(woeid) {
    let resultMsg = 'everything is ';
    try {
        const result = await fetch
        (`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`temperatures tomorrow in ${data.title} will stay between ${tomorrow.min_temp}°C and ${tomorrow.max_temp}°C`);
        resultMsg += result.statusText;
        return [resultMsg, data];
    }catch (e) {
        console.log(e);
        resultMsg = 'something goes wrong';
    }

    return resultMsg;

}
let data; //записываем ресультат запроса в эту переменную
getWeatherAW(44418).then(result => {
    if (typeof result === "string") {
        console.log(result);
        return
    }
    console.log(result[0]);
    data = result[1];
    console.log(data);
});
// const dataSF = getWeatherAW(2487956).then(result => console.log(result)); - it's not working
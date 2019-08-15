import axios from 'axios'

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults() {
        const key ='5f9f81bbd86238c705c2bfc898b1a8b0';
        try {
            //see docs here: https://www.food2fork.com/about/api
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`) //axios automatically returns json
            this.result = res.data.recipes;
        } catch (e) {
            alert(e)
        }
    }
}
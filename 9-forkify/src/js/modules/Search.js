import axios from 'axios'
import {key, mainUrl} from '../config'

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults() {

        try {
            //see docs here: https://www.food2fork.com/about/api
            const res = await axios(`${mainUrl}search?key=${key}&q=${this.query}`) //axios automatically returns json
            this.result = res.data.recipes;
        } catch (e) {
            console.log(document.getElementsByTagName('script'));
            alert(e)
        }
    }
}

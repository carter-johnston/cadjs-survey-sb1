import {surveys} from "../../db/collections/surveys";
import type {PageServerLoad} from './$types'
export const load: PageServerLoad = async function(){
    const data = await surveys.find({}).toArray();
    console.log('data', data);
    return{   
            surveys: data
    }

}
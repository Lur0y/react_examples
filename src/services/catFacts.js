import axios from "axios";

const url = "https://catfact.ninja/fact";

export async function getRandomCatFact(){

    const response = await axios.get(url);
    return response.data.fact;

}
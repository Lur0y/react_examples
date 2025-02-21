import axios from "axios";

const base_url = "https://cataas.com/cat/says";

export async function getCatImgFromPhrase(phrase){

    const response = await axios.get(`${base_url}/${phrase}`);
    return response.data.url;

}
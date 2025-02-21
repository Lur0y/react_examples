import { useEffect, useState } from "react";
import { getCatImgFromPhrase } from "@/services/catImg";

export default function useCatImage({ fact }){

    const [img, setImg] = useState(null);

    useEffect(() => {

        if(!fact){ return }

        const phrase = fact.split(' ')[0];
        getCatImgFromPhrase(phrase)
        .then(setImg)
        .catch(error => {
            console.error("Error fetching cat fact:", error);
            alert("Oops! Something went wrong while getting a cat image. Please try again later or check your internet connection.");
        });
        
    }, [fact]);

    return {img};

}

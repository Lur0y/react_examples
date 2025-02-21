import { useEffect, useState } from "react";
import { getRandomCatFact } from "@/services/catFacts";

export default function useCatFact(){

    const [fact, setFact] = useState(null);

    function refreshCatRandomFact(){
        
        getRandomCatFact()
        .then(setFact)
        .catch(error => {
            console.error("Error fetching cat fact:", error);
            alert("Oops! Something went wrong while getting a cat fact. Please try again later or check your internet connection.");
        });

    }

    useEffect(refreshCatRandomFact, []);

    return {fact, refreshCatRandomFact};

}
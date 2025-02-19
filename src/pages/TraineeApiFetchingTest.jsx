/*
    It's common for companies to accept trainees, and when you assign tasks to them, you often spend more time 
    explaining what and how to do things than actually doing it yourself.

    It's okay not to know everything from the start, but there are some basic concepts you shouldn't have to 
    explain, such as what an API or an array is.

    Technical interviews are usually designed to check if a candidate has the basics down. Here's a simple
    React task to test a candidate's skills:

    The task is to fetch data from two APIs and display it. Specifically:
    - Fetch a random cat fact from https://catfact.ninja/fact
    - Display an image with the first word of the fact from https://cataas.com/cat/says/hello

    This task will help you evaluate if the candidate:
    - Knows how to fetch data from an API
    - Understands the basics of useState
    - Understands the basics of useEffect

    Here's a solution:
*/
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TraineeApiFetchingTest() {

    const [fact, setFact] = useState(null);
    const [img, setImg] = useState(null);

    function handleClick(){

        const url = 'https://catfact.ninja/fact';
        axios.get(url)
        .then( (response) => {
            setFact(response.data.fact);
        })
        .catch( (error) => {
            alert('Ops! Error while getting a cat fact, please try again latter or check if you have internet connection');
            console.log(error);
        });

    }

    useEffect(() => {

        if(fact){
            const phrase = fact.split(' ')[0];
            const url = `https://cataas.com/cat/says/${phrase}`;
            setImg(url);

            axios.get(url)
            .then( (response) => {
                setImg(response.data.url);
            })
            .catch( (error) => {
                alert('Ops! Error while getting a cat image, please try again latter or check if you have internet connection');
                console.log(error);
            });
        }

    }, [fact]);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: '100vw',
                height: "100vh",
                maxWidth: '100%',
                maxHeight: '100%',
                flexDirection: 'column'
            }}
        >
            <Button onClick={handleClick} variant="contained">
                Click here to display image
            </Button>
            {
                img &&
                <Box
                    sx={{
                        width: 'auto',
                        height: '80vh'
                    }}
                >
                    <img src={img} alt="Cat Img!" style={{width: '100%', height: '100%'}} />
                </Box>
            }
        </Box>
    );
}

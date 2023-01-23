import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { siteMetadata } from '../../gatsby-config';

const HitCounter = ({ slug }) => {

    const [hits, setHits] = useState(undefined)

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            return;
        }

        const url = "https://api.williamm.me/v1/count"
        //const formData = new FormData();
        //formData.append('slug', slug);
        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({site: slug})
        }
        fetch(url, options)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed")
                }
                return res.json()
            })
            .then((data) => {
                //if (typeof hits === 'number') {
                    setHits(data);
               // }
            })
            .catch((error) => {
                console.error("Error in fetch request:" + error)
            })
    }, [slug])

    if (typeof hits === "undefined") {
        return null;
    }

    return (
        <p>{hits}</p>
    )
}

export default HitCounter;
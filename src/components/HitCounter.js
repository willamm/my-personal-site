import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const HitCounter = ({ slug }) => {

    const [hits, setHits] = useState(undefined)

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            return;
        }
        const url = "https://api.williamm.me/v1/count"
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
                setHits(data);
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
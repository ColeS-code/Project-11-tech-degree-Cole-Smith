import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "../config";

import PhotoContainer from "./PhotoContainer";

const Cats = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    // 
    useEffect(() => {
        setLoading(true);
        let activeFetch = true;
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                // 
                if (activeFetch) {
                    console.log(response);
                    setPhotos(response.data.photos.photo);
                    setLoading(false);
                }
            })
            .catch(error => {
                // 
                console.log("Error fetching the data", error);
            });
        return () => { activeFetch = false }
    }, []);

    return (
        <div className="photo-container">
            {<PhotoContainer data={photos} />}
        </div>
    )
}

export default Cats;
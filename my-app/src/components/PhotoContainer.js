import React from 'react';
import Photo from './Photo.js';

import NotFound from './NotFound';



const photoContainer = ({data}) => {
    const results = data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <Photo key={photo.id} server={photo.server} id={photo.id} secret={photo.secret} alt={photo.title} />);
    } else {
        photos = <NotFound />
    }

    return (
        <div className='photoContainer'>
            <h1>Search Results</h1>
            <ul className='list-imgs'>
                {photos}
            </ul>
        </div>
    )
};

export default photoContainer;
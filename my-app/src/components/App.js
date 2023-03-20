//
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiKey from '../config';

//
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import Search from './Search';
import Birds from './Birds';
import Cats from './Cats';
import Dogs from './Dogs';



const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('animals');
  const [, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {

        if (activeFetch) {
          console.log(response);
          setPhotos(response.data.photos.photo);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log('could not fetch the data', error);
      });
      return () => { activeFetch = false }
  }, [query]);
  
  const queryChange = searchText => {
    setQuery(searchText);
    navigate(`/search/${searchText}`);
  }

  //
  return (
    <div className='container'>

      <Search changeQuery={queryChange} />
      <Nav/>

      <Routes>
        <Route path='/' element={<PhotoContainer data={photos} />}/>
        <Route path='/dogs' element={<Dogs/>}/>
        <Route path='/birds' element={<Birds/>}/>
        <Route path='/cats' element={<Cats/>}/>
        <Route path='/search/:searchText' element={<PhotoContainer data={photos} />}/>
      </Routes>

    </div>
  );
}



export default App;
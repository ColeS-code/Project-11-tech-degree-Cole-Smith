import React, { useState } from 'react'

function Search(props) {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.changeQuery(searchText);
        e.currentTarget.reset();
    }

    return (
        <form className= 'search-form' onSubmit={e => handleSubmit(e)} >
            <input type='search'
                    name= 'search'
                    placeholder= 'Search'
                    onChange={e => setSearchText(e.target.value)}
                    required />
            <button type= 'submit' className= 'search-button'></button>        
        </form>
    );
}

export default Search;
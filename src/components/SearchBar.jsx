import React from 'react'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='searchbar'
            />
            {searchQuery ? <div>Search Resouls :  {searchQuery}</div> : <></>}
        </>
    );
}

export default SearchBar
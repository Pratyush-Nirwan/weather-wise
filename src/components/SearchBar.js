import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
const SearchBar = ({ searched }) => {
    const [searchValue, setSearchValue] = useState('');

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searched(e.target.value);
        }
    }
    return (
        <div id='search-bar-div'>
            <input type='text' id="search" onKeyDown={onKeyDown} />
            <div id="search-btn"><IoIosSearch size={30} /></div>
        </div>
    )
}

export default SearchBar;
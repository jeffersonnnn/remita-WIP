import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = (props) => {
    return (
        <div className="container">
            <div className="form-group has-search">
                <span className="icon-shift">
                    <FaSearch />
                </span>
                <input type="text" className="input-large" placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default Search;
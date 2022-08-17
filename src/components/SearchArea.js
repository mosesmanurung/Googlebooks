import React from 'react';

const SearchArea = (props) => {
    return (
        <div className='search-area'>
            <form onSubmit={props.searchBook} action="">
                <div className="form-group mx-sm-4 mb-2" id='inputanketerangan'>
                    <input onChange={props.handleSearch} type="text" class="form-control" placeholder="
                    search book by the title" />
                </div>
                <button type='submit' className="form-group mx-sm-4 mb-2" class="btn btn-primary" id='buttoninputan'>Search</button>
            </form>
        </div>
    )
}

export default SearchArea;
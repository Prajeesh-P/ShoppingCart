import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Threads & Trends: Your Stylish Shopping Companion</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default SearchComponent;
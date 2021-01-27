import React from 'react'
import './App.css';
import SearchIcon from "@material-ui/icons/Search";

function App() {
  return (
    <nav className = "header">
      <img className = "header_logo" src = "https://pngimg.com/uploads/camera_lens/camera_lens_PNG75.png"  alt = "" />

  <div className = "header_searchBar">
      <input type = "text" placeholder = "Search" className = "header_searchInput"/>
      <SearchIcon className = "searchIcon" />
    </div>
  
    <div className = "header_nav">
         <div className = "header-option">
        <span className = "header_optionOne">Link </span>
        <span className = "header_optionTwo">Users</span>
      </div>
     
      <div className = "header-option">
        <span className = "header_optionOne">About </span>
        <span className = "header_optionTwo">Contact</span>
      </div>
      
    </div>
    </nav>
   
  );
}

export default App;

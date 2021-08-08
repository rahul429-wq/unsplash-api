import "./App.css";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
// Ow22_TFoqIL3GXB9hMbpzhz2rf6qEVfnoDiVucU708g
// Vo1cyN3i9_uEeQIc6abCfrPZFi9VaH6GM3G4MkPqhLs  //sec

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=Ow22_TFoqIL3GXB9hMbpzhz2rf6qEVfnoDiVucU708g&query=${value}&orientation=portrait&landscape`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  };
  return (
    <div className="App">
      <div className="mydiv">
        <span className="left">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png"
            alt=""
          />
        </span>
        <span className="right">
          <div className="in">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button style={{ cursor: "pointer" }} onClick={() => fetchImages()}>
              <SearchIcon />
            </button>
          </div>
        </span>
        <span className="last">
          <NotificationsIcon className="ic1" />
          <AccountCircleIcon className="ic1" />
        </span>
      </div>

      <div className="galley">
        {results.map((item) => {
          return (
            <>
              <img className="item" key={item.id} src={item.urls.regular} />
              {/* <p>{item.description}</p> */}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;

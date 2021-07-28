import React,{useEffect,useState} from  'react';
import './App.css';
import Login from "./component/Login";
import {getTokenFromUrl} from "./component/spotify";
import sportifyWebApi from "spotify-web-api-js";
import {DataLayerStateValue} from "./component/DataLayer";
import Player from "./component/Player";

const spotify = new sportifyWebApi();

function App() {

  const [{token,discover_weekly},dispatch] = DataLayerStateValue();
  //const [token,setToken] = useState("");


  // this is used to get the token from url .that url contains the our detail i get the user name..
  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token)
    {
      dispatch({
        type:"SET_TOKEN",
        token : _token,
      })
      spotify.setAccessToken(_token); // getMe() function used to user data as object....

      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user:user,
        })
      });

      spotify.getUserPlaylists().then((playlists)=>{
        console.log("platList",playlists)
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        })
      })

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response)=>{
        
        dispatch({
          type:"SET_WEEKLY_DISCOVER",
          discover_weekly : response,
        })
        
      })
      
    }
  },{})
 
  
  return (
    <div className="app">
      {token ? <Player spotify = {spotify}/> : <Login />}
    </div>
  );
}

export default App;

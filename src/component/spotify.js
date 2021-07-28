//these details get from spotify.for developer account

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirecturi = "http://localhost:3000/";

const clientID = "ad6e762a5cf04193a84621c5b6683719"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = ()=>{
    return window.location.hash.substring(1).split("&").reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    },{});
    
}
export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirecturi}&scopes=${scopes.join("%20")}&response_type=token&shoe_dialog=true`;
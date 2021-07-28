 export const initialState= {
     user:null,
     playlists : [],
     playing:false,
     item:null,
     discover_weekly:null,
     //token:"BQCnYAtAQabIbUxGqWYLDf9rLploRvThh4sRf2cZXm4pNEZ0uNlC3xqDSlDCpSAzXmevhYnazL1WusVKYhJ44MuX20Hx6omt0GkWAtkmU4daWPspuHiaRMugvRaXXkSQmQbXcrr_EiiZFnI2Os8kZ0tnQbu7_LU&token_type=Bearer&expires_in=3600",
 }


export const reducer = (state,action) => {
    console.log("ok",action.dicover_weekly)
    switch(action.type){
        case "SET_USER" :
            return{
                ...state,
                user:action.user,
            }
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
        case "SET_WEEKLY_DISCOVER":
            return {
                ...state,
                discover_weekly : action.discover_weekly,
            }
        default :
            return state;
    }
 }
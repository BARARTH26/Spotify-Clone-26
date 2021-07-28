import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search";
import {DataLayerStateValue} from "./DataLayer";

function Header() {

    const [{user},dispatch] = DataLayerStateValue();
    console.log("user",user)
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon className="headerLeft__icon"/>
                <input placeholder="search Album,Artist..."/>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0].url}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header

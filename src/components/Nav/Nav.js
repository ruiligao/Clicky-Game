import React from "react";
import "./Nav.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <ul>
                <li className="itemLeft"> 
                <a className="navbar-brand" href="/"> Clicky Game</a>
                </li>
                <li className="itemCenter">{props.message}</li>
                <li className="itemRight">Score: {props.score} | high Score: {props.highscore}</li>
            </ul>
        </nav>
    );
}

export default Nav;

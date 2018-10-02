import React from "react";

const Header = (title, content) => {
    return (
        <div className="header">
            <h1>{ Bottega }</h1>
            <p>{ content }</p>
        </div>
    )
}

export default Header;
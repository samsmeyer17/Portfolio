import React from 'react';

var style = {
    backgroundColor: "lightgrey",
    borderTop: "3px solid maroon",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    color: 'black',
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                Created Using React
            </div>
        </div>
    )
}

export default Footer;
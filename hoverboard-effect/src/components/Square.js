import { useState } from "react";

const colors = ['#F6BD60', '#F7EDE2', '#F5CAC3', '#84A59D', '#F28482'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

function Square() {
    const [bgColor, setBgColor] = useState('#1d1d1d');
    const [boxShadow, setBoxShadow] = useState('0 0 2px #000');

    function handleMouseOver() {
        const color = getRandomColor();
        setBgColor(color);
        setBoxShadow(`0 0 2px ${color}, 0 0 10px ${color}`);
    }

    function handleMouseOut() {
        setBgColor('#1d1d1d');
        setBoxShadow('0 0 2px #000');
    }

    return (
        <div 
        className="square"
        style={{ backgroundColor: bgColor, boxShadow: boxShadow }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ></div>
    );
}

export default Square;
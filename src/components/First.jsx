import React, {useEffect} from 'react';
import "../styles/style2.css"
const First = () => {
    let s2;
    let s;
    const colors = ["green", "red", "yellow", "blue", "black", "pink", "gray", "orange", "purple"];
    const choose = [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]];
    let f = Math.floor(Math.random() * 2);
    if (f === 1) {
        s = 0;
    } else {
        s = 1;
    }

    useEffect(() => {
        document.querySelector('.dot').style.backgroundColor = choose[f];
        document.querySelector(".dot2").style.backgroundColor = choose[s];
    }, []);

    f = Math.floor(Math.random() * 2)
    if (f === 1) {
        s = 0
    } else {
        s = 1
    }
    const f2 = Math.floor(Math.random() * 2);
    if (f2 === 1) {
        s2 = 0;
    } else {
        s2 = 1;
    }

    useEffect(() => {
        const v = document.querySelector(".ftxt");
        const v2 = document.querySelector(".stxt");

        v.textContent = choose[f2];
        v.style.color = choose[f];

        v2.textContent = choose[s2];
        v2.style.color = choose[s];
    }, []);

    return (
        <div id="First">
            <div className="dot"></div>
            <div className="dot2"></div>
            <div className="bord"></div>
            <div className="ftxt"></div>
            <div className="stxt"></div>
        </div>
    );
};

export default First;
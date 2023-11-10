import React from 'react';
import "../styles/style.css";

const Title = ({ setPage }) => {
    return (
        <div>
            <div className="Title">
                Simple task
            </div>
            <div className="Second">
                Solve 3 tests correctly in 27 seconds
            </div>
            <div className="ButtonDiv">
                <button
                    className="Button"
                    onClick={ () => setPage("first") }
                >
                    Let's try
                </button>
            </div>
        </div>
    );
};

export default Title;
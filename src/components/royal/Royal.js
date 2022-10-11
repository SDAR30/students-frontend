import React from 'react';
import './Royal.scss';

function Royal(props) {
    return (
        <div className="frontpage">

            <div className="frontpage__title">
                Royal StrawBerry
            </div>

            <div className="frontpage__navbar">
                <div>Home</div>
                <div>Community</div>
                <div>Media</div>
                <div>About</div>
            </div>

            <div className="frontpage__picture">
                Connect with others and overcome bad habits
            </div>

            <div className="frontpage__counter">
                Counter
            </div>

            <div className="frontpage__login">
                Login
            </div>
            
            <div className="frontpage__infograph">
                <img src="https://via.placeholder.com/150C" alt="infograph"/>
                Picture
            </div>

            <div className="frontpage__facts">
                fact 1, fact 2, fact 3
            </div>

        </div>
    );
}

export default Royal;
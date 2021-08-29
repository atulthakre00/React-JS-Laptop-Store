import React from 'react'
import './style.css';

function navbar() {
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        Laptop Inventory
                    </div>
                </div>

                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <a href="/">Home</a>
                </div>
            </div>
        </div>
    )
}

export default navbar;
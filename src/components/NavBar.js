import React from 'react';

function NavBar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item d-none d-sm-inline-block">
                    <button type="button" class="btn btn-primary">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

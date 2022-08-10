import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className={"navbar"}>
                <div className={"navbar-container"}>
                    <ul>
                        {/* navigation section #1 */}
                        <li className={'nav-item'}>
                            <Link to={''} className={'nav-links'}>
                                Blah
                            </Link>
                        </li>

                        {/* navigation section #2 */}
                        <li className={'nav-item'}>
                            <Link to={''} className={'nav-links'}>
                                Blah
                            </Link>
                        </li>

                        {/* navigation section #3 */}
                        <li className={'nav-item'}>
                            <Link to={''} className={'nav-links'}>
                                Blah
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
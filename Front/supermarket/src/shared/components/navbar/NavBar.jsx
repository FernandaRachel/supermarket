import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="#/products">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Dashboard <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/products">Products</a>
                        </li>
                        <li className="nav-item dropdown">
                            {/* <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="text-white" to="/products">
                                  Massa
                                </Link>
                            </div> */}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
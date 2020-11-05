import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        var auth=localStorage.getItem('auth');
        console.log(auth);
        return (
            <div>   
                {
                    auth!==null&&auth!==undefined?
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark"  >        
                            <div className="container navbar-collapse collapse navbar-nav ">
                                <Link  className="nav-item nav-link text-success" to="home"> Home </Link>
                                <Link className="nav-item nav-link text-success" to="create"> Create Post </Link>
                                <Link className="nav-item nav-link text-success" to="about"> About </Link>
                                <Link className="nav-item nav-link text-success" to="logout"> Logout</Link>
                            </div>
                        </nav>
                        :
                        ''
                }
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Logout extends Component {
    render() {
        localStorage.clear()
        return (
            <div>
                <Redirect to="/" ></Redirect> 
            </div>
        )
    }
}

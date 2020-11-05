import React, { Component } from 'react'
import {Redirect } from 'react-router-dom'
import Nav from '../components/Nav'
function Protected(props){
    const Component=props.component;
    var auth=localStorage.getItem("auth");
    return <div> 
            {
                auth!==null&&auth!==undefined?<div><Nav/> < Component /></div>
                :<Redirect to="/" ></Redirect>
            }
         </div>
}

export default Protected;

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './../index.css'
export default class Auth extends Component {

    constructor(){
        super()
        this.state={
            page:'login',
            redirect:false
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='home' ></Redirect>
        }
      }

    login(e){
        e.preventDefault();
        fetch('http://127.0.0.1:8000/authentication/api/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.token)
                if(resp.token!==undefined&&resp.token!==null)
                 {
                    localStorage.setItem("auth",JSON.stringify(resp.token));
                     this.setState({redirect:true})
                 }
            })
        })
    }

    register(e){
        e.preventDefault();
        fetch('http://127.0.0.1:8000/authentication/api/register',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.token)
                if(resp.token!==undefined&&resp.token!==null)
                {
                   localStorage.setItem("auth",JSON.stringify(resp.token));
                    this.setState({redirect:true})
                }
            })
        })
    }

    render() {
        var auth=localStorage.getItem('auth');
        return (
            <div>
                {this.renderRedirect()}
                {
                    auth?<Redirect to="home"></Redirect>:null
                }
                {
                  this.state.page==='login'
                        ?
                        <form action="">
                            <h3> Sign In </h3>
                            <div className="form-group">
                                <label>User name</label>
                                <input type="text" className="form-control" placeholder="Enter User name" onChange={(e)=>this.setState({username:e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="value-required">Password</label>
                                <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>this.setState({password:e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" onClick={(e) =>this.login(e)}>Login</button>
                            <p className="forgot-password text-right">
                                Not yet registered? <a href="#" onClick={() =>this.setState({page:'register'})}>Register Here</a>
                            </p>
                        </form>
                        :
                        <form>
                            <h3>Sign Up</h3>
                            <div className="form-group">
                                <label>User name</label>
                                <input type="text" className="form-control" placeholder="Enter User name" onChange={(e)=>this.setState({username:e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter Email" onChange={(e)=>this.setState({email:e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>this.setState({password:e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e)=>this.setState({confirm_password:e.target.value})}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block"onClick={(e) =>this.register(e)}>Register</button>
                            <p className="forgot-password text-right">
                                Already registered? <a href="#" onClick={() =>this.setState({page:'login'})}>Login</a>
                            </p>
                        </form>
              }
            </div>
        )
    }
}

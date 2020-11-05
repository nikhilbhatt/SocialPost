import React, { Component } from 'react'
import {Redirect} from 'react-router-dom' 

export default class CreatePost extends Component {

    constructor(){
        super();
        this.state={
            redirect:false
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='home' ></Redirect>
        }
      }

    create(e){
        e.preventDefault();
        this.state.redirect=true;
        var data = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];
        console.log(imagedata);
        data.append("title",this.state.title);
        data.append("body",this.state.body);
        data.append("image", imagedata);
        console.log(data);
        fetch('http://127.0.0.1:8000/view-post/api/create', {
                method: "POST",
                mode: 'no-cors',
                body: data
                }).then(function (res) {
                if (res.ok) {
                    alert("Perfect! ");
                } else if (res.status == 401) {
                    alert("Oops! ");
                }
                }, function (e) {
                alert("Error submitting form!");
            });
        
        }
    render() {
        return (
            <div >
                {this.renderRedirect()}
                <form action="" encType="multipart/form-data" className="container-fluid col-md-12">
                            <h3> Create New Post</h3>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="Enter title" onChange={(e)=>this.setState({title:e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="value-required">Body</label>
                                <textarea className="form-control" placeholder="Enter body here" rows="6" cols="50" onChange={(e)=>this.setState({body:e.target.value})}/>
                            </div>
                            <div className="form-group">
                                    <label >Choose Image</label>
                                    <input type="file" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" onClick={(e) =>this.create(e)}>Create Post</button>
                    </form>
            </div>
        )
    }
}

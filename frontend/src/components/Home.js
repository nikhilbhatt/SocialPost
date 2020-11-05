import React, { Component } from 'react'

export default class Home extends Component {

    constructor(){
        super();
        this.state={
            items:null
        }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/view-post/api/').then((result)=>{
            result.json().then((data)=>{
                console.log(data);
                this.setState({items:data});
            })
        })
    }
    deletePost(slug){
        fetch('http://127.0.0.1:8000/view-post/api/'+slug+'/delete',{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((data)=>{
                console.log(data);
            })
        })
    }

    render() {
        return (
            <div className="home" >
                <h1 >Published Posts</h1>
                {
                this.state.items?
                this.state.items.map((item,index)=>
                    <div key={index} className="card mt-1 justify-content-center" >
                        <img className="card-img align-content-center" src={'http://localhost:8000'+item.image} alt={item.image}/>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="card-text">{item.body}</p>
                            <p href="#" className="btn btn-primary " >Edit</p>
                            <p href="#" className="btn btn-danger ml-3" onClick={(e)=>this.deletePost(item.slug)}>Delete</p>
                        </div>
                    </div>
                    ):
                    null
                }
                
            </div>
        )
    }
}

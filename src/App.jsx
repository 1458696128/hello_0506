import React, { Component } from 'react'
import Add from './Components/add/Add'
import List from './Components/list/List'
import Item from './Components/item/Item'
export default class App extends Component {
    state={
       comments:[
        // {id:"123435453",userName:"小猪佩奇",content:"react好牛逼"},
        // {id:"1234553",userName:"小狗丹尼",content:"react容易学"},
        // {id:"1232245",userName:"小羊苏西",content:"react just soso"}
    
    ]
    }
    addComments=(obj)=>{
          let comments=[...this.state.comments]
          comments.unshift(obj)
          this.setState({comments})
          
    }
    deleteComments=(id)=>{
         let comments=[...this.state.comments]
         comments.forEach((item,index)=>{
           if(item.id===id){
            comments.splice(index,1) 
           }
         })
         this.setState({comments})
    }
    render() {
        let {comments}=this.state
        return (
            <div id="app">
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Add addComments={this.addComments}/>
                    <List comments={comments} deleteComments={this.deleteComments}/>
                </div>

            </div>

        )

    }
}
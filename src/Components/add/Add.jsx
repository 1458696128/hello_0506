import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {v1 as uuid} from "uuid"; 

export default  class Add extends Component {
    static propTypes={
        addComments:PropTypes.func.isRequired
    }
    add=()=>{
       
        let userName=this.userName.value
        let content=this.content.value
        if(!userName||!content){
            alert("请输入内容")
            return
        }
        let obj={id:uuid(),userName:userName,content:content}
        let {addComments}=this.props
        // console.log(addComments)
        console.log(obj)
        addComments(obj)
       
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref={input=>this.userName=input}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control"rows="6" placeholder="评论内容" ref={input=>this.content=input}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
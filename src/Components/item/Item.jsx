import React,{Component} from 'react'
import './Item.css'
import PropTypes from 'prop-types'
export default class Item extends Component{
    static propTypes={
         userName:PropTypes.string.isRequired,
         content:PropTypes.string.isRequired
    }
    delete=()=>{
        let{id}=this.props
        console.log(id)
        let {deleteComments}=this.props
        console.log(deleteComments)
        if(window.confirm('是否删除该内容')){
            deleteComments(id)
        }
    }
    render(){
         let {userName,content}=this.props
        return(
            <li className="list-group-item">
                <div className="handle">
                   <a href="#1" onClick={this.delete}> 删除</a>
                </div>
                <p className="user"><span>{userName}</span><span>说：</span></p>
                <p className="centence">{content}</p>
            </li>
        )
    }
}
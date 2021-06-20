import React,{Component} from 'react'
import Item from '../item/Item'
import  './List.css'
import PropTypes from 'prop-types'
export default class List extends Component{
    static propTypes={
        comments:PropTypes.array.isRequired
    }
    render(){
        let {deleteComments}=this.props
        let {comments}=this.props
        // console.log(comments)
        return(
            <div className="col-md-8">
                <h3 className="reply"> 评论回复： </h3>
                <h2 style={{display:comments.length>0?'none':'block'}}>暂无评论，点击左侧添加评论！</h2>
                <ul className="list-group">
                 {comments.map((item,index)=>{return <Item key={item.id} userName={item.userName} content={item.content} id={item.id} deleteComments={deleteComments}/>})}
                </ul>
            </div>
        )
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
   /* itemStyle=()=>
    {
        if(this.props.todo.completed)
        {
            return{
                textDecoration:'line-through'
            }
        }
        else{
            return{
                textDecoration:'none'
            }
        }
    }*/
    itemStyle=()=>{
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.isDone?
            'line-through':'none'
        }
    }
   /* markComplete=(e)=>
    {
        console.log(this.props)
    }*/
  render() {
      const{ id,taskName} =this.props.todo;
      return (
        <div style={this.itemStyle()}>
            <p>
               <input type="checkbox" checked={this.props.todo.isDone} onChange={this.props.markComplete.bind(this,id)}/> 
               {' '}
                {taskName}
                <button onClick ={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
            </p>
        </div>
      )
  }
}
//proptypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
    
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
//const itemStyle={backgroundColor:'#f4f4f4'}
export default TodoItem;

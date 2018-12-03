import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions';

 class ListItem extends Component {
   constructor() {
     super();
     this.handleDelete = this.handleDelete.bind(this);
   }
   handleDelete(id) {
     this.props.deleteTodo(id);
   }
   render()
   {
    const todo = this.props.todo; 
    return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.text}
      <button onClick={this.handleDelete.bind(this,todo._id)} class=" btn-sm btn btn-danger">X</button>
    </li>
    );
   }
 }
//  mapStateToProps = state => ({
//     state: state
//  });

 export default connect(null, { deleteTodo })(ListItem);
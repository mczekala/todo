import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from "../actions/todoActions";
import ListItem from './ListItem';

 class List extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
   render() 
   {
     const todos = this.props.todo;
      if(todos!==undefined) {
        return (
          <div class="container">
            <ul class="list-group">
              {todos.map(todo => <ListItem todo={todo}/>)}
            </ul>
          </div>
        );
      }
      else {
        return 'loading...';
      }
    }
 }
 const mapStateToProps = state => ({
  todo: state.todos
 });
 export default connect(mapStateToProps, {getTodos})(List);
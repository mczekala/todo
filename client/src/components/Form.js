import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

 class Form extends Component {
   constructor() {
     super();
     this.state={value:''};
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
   }
   handleSubmit(event) {
    const newTodo = {
      text: this.state.value
    }; 
    
     this.props.addTodo(newTodo);
   }
   handleChange(event) {
    this.setState({value: event.target.value});
   }
   render() {
     return(
      <div class="container">
        <form class="input-group  my-4" onSubmit={this.handleSubmit}>      
            <input type="text" onChange={this.handleChange} class="form-control"/>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="Submit">Submit</button>
            </div>
      </form>
    </div>
   );
   }
 }
 export default connect(null, { addTodo })(Form);
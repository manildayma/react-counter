import React, { Component } from 'react';

class Counter extends Component {
 
  state = {
    value : this.props.counter.value
  };
  
  addValue = () =>{
    this.setState({value : this.state.value + 1});
  }
  deleteValue = () =>{
    if(this.state.value > 0)this.setState({value : this.state.value -1});
  }

  render() { 
    return (
      <div>
        
        {this.props.children}

        <button
        onClick={this.deleteValue}
         className="btn btn-danger btn-sm m-2">
         DELETE
         </button>

         <span 
         className={this.classes()}>
         {this.formatCount()}
         </span>
         
         <button
         onClick={this.addValue}
         className="btn btn-secondary btn-sm">ADD
         </button>

      </div>
    );
  }

    classes() { 
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? 'zero' : count;
    }
 
}

export default Counter;

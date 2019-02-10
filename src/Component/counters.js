import React, {Component} from 'react';
import Counter from './counter';


class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     };

    render() { 
        return (  
            <div>

                {/* <button className="btn btn-primary btn-sm m-2"
                onClick={this.reset}
                >RESET
                </button> */}

                {this.state.counters.map(counter => 
                <Counter 
                // key={counter.id} 
                // value={counter.value}
                counter={counter}>
                
                <h4>COUNTER #{counter.id} </h4>
                </Counter> )}


            </div>
        );
    }
}
 
export default Counters;

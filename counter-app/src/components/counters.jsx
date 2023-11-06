import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    const {onReset, counters, onIncrement, onDelete} = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

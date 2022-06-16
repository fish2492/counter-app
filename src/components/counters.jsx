import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <>
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onClick}
              /*value={counter.value}
              selected={true}
              id={counter.id}*/
              //the above code can be replaced by the code below
              counter={counter}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>{" "}
            <br />{" "}
          </>
        ))}
      </div>
    );
  }
}

export default Counters;

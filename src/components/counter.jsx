import React, { Component } from "react";

class Counter extends Component {
  /*state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2"],
  };*/

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  //'this' is working in arrow fun only in this case
  /*handleIncrement = (product) => {
    console.log(product);
    //console.log("Increment clicked.", this);
    this.setState({ value: this.state.value + 1 });
  };*/

  /*
    doHandleIncerment = () => {
        this.handleIncrement({ id: 1 });
    }
*/
  render() {
    //console.log("props", this.props);

    return (
      <React.Fragment>
        {/*<h1>Hello World</h1>*/}
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={
            /*this.doHandleIncerment*/ /*() => this.handleIncrement({ id: 1 })*/
            () => this.props.onIncrement(this.props.counter)
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        {/*<br />*/}
        {/*{ this.state.tags.length === 0 && "Please create a new tag!"}
               { this.renderTags() } */}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

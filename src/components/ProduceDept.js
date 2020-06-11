import React, { Component } from "react";
import { connect } from "react-redux";
import produceUpdate from "../actions/produceInvUpdate";

class ProduceDept extends Component {
  increment = (operation, index) => {
    if (operation === "+") {
      produceUpdate();
    } else if (operation === "-") {
    }
  };

  render() {
    const produceInventory = this.props.produceData.map((item, i) => {
      return (
        <div key={i}>
          <li>
            {item.food}: {item.quantity}
          </li>
          <input
            type='button'
            onClick={() => {
              this.increment("+", i);
            }}
            value='+'
          />
          <input
            type='button'
            onClick={() => {
              this.increment("-", i);
            }}
            value='-'
          />
        </div>
      );
    });
    return (
      <div>
        <h1>The Produce Food Inventory</h1>
        <ul>{produceInventory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    produceData: state.produce,
  };
}

export default connect(mapStateToProps)(ProduceDept);

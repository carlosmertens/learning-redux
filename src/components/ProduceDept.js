import React, { Component } from "react";
import { connect } from "react-redux";
import produceUpdate from "../actions/produceInvUpdate";
import { bindActionCreators } from "redux";

class ProduceDept extends Component {
  increment = (operation, index) => {
    this.props.produceUpdate(operation, index);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      produceUpdate: produceUpdate,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);

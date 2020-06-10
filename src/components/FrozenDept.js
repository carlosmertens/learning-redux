import React, { Component } from "react";

// We want this component to know about redux.
// To do that, we need some help... or some glue
// The glue is react-redux! We need the connect function
import { connect } from "react-redux";

class FrozenDept extends Component {
  render() {
    // console.log(this.props.frozenData);
    // console.log(this.props.meatData);

    const frozenInventory = this.props.frozenData.map((item, i) => {
      return (
        <li key={i}>
          {item.food}: {item.quantity}
        </li>
      );
    });

    return (
      <div>
        <h1>The Frozen Food Inventory</h1>
        <ul>{frozenInventory}</ul>
      </div>
    );
  }
}

// console.log(connect);
// mapStateToProps takes 1 arg, "state" and that is the rootReducer/Store
function mapStateToProps(state) {
  // mapStateToProps returns an object, with:
  // property is the local prop name to this component
  // value will be the property in the root reducer... ie, a piece of the store
  return {
    frozenData: state.frozen,
    // meatData: state.meat,
  };
}

// export default FrozenDept;

// connect takes 2 args, the first one is a function that is going to map
// a piece of redux state to this components props
export default connect(mapStateToProps)(FrozenDept);

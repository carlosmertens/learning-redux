import React, { Component } from "react";
// We want this component to know about redux.
// To do that, we need some help... or some glue
// The glue is react-redux! We need the connect function
import { connect } from "react-redux";
import frozenUpdate from "../actions/frozenInvUpdate";
import { bindActionCreators } from "redux";

class FrozenDept extends Component {
  increment = (operation, index) => {
    // console.log(operation, index);
    this.props.frozenUpdate(operation, index);
  };

  render() {
    // console.log(this.props.frozenData);
    // console.log(this.props.meatData);

    const frozenInventory = this.props.frozenData.map((item, i) => {
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

// mapDispatchToProps is how we tie our component to the dispatch
// It takes 1 arg: dispatch
function mapDispatchToProps(dispatch) {
  // this function returns, bindActionCreators
  // and we hand bindActionCreators an object:
  // each property will be a local prop
  // each value will be a function that is dispatch when run
  // 2nd arg or bindActionCreators is the dispatch
  return bindActionCreators(
    {
      frozenUpdate: frozenUpdate,
    },
    dispatch
  );
}

// export default FrozenDept;

// connect takes 2 args, the first one is a function that is going to map
// a piece of redux state to this components props
// 2nd arg to connect: mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);

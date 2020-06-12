const seedData = [
  { food: "Chicken Breats", quantity: 2 },
  { food: "Bacon", quantity: 2 },
  { food: "Salmon", quantity: 4 },
  { food: "Steak", quantity: 2 },
];

export default (state = seedData, action) => {
  console.log("Meat Reducer is running!");
  console.log(action);
  if (action.type === "updateMeat") {
    const newState = [...state];
    if (action.payload.operation === "+") {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.index].quantity--;
    }
    return newState;
  } else if (action.type === "clearInventory") {
    let newState = [...state];
    newState.forEach((item, i) => {
      item.quantity = 0;
    });
    return newState;
  } else {
    return state;
  }
};

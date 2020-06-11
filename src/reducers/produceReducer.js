const seedData = [
  { food: "Lettuce", quantity: 8 },
  { food: "Turnips", quantity: 4 },
  { food: "Cilantro", quantity: 125 },
  { food: "Tomatoes", quantity: 6 },
];

export default (state = seedData, action) => {
  console.log("Produce Reducer is running!");
  console.log(action);
  if (action.type === "updateProduce") {
    const newState = [...state];
    if (action.payload.operation === "+") {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.index].quantity--;
    }
    return newState;
  } else {
    return state;
  }
};

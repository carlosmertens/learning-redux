// All reducers have 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
  { food: "Lazy Dinners", quantity: 10 },
  { food: "Frozen Veggies", quantity: 21 },
  { food: "Frozen Pizza", quantity: 25 },
];

export default (state = seedData, action) => {
  return state;
};

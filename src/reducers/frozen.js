// All reducers have 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = ["Lazy dinners", "Frozen Veggies", "Frozen Pizza"];

export default (state = seedData, action) => {
  return state;
};

// This file is an action creator!
// Action creators return actions
// Action is an object that has at LEAST a property of type
// This action creator is going to be handed to the dispatch

export default () => {
  console.log("Updating frozen...");
  return {
    type: "updateFrozen",
  };
};

export default (operation, index) => {
  console.log("Updating meat...");
  return {
    type: "updateMeat",
    payload: {
      operation,
      index,
    },
  };
};

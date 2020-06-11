export default (operation, index) => {
  console.log("Updating produce...");
  return {
    type: "updateProduce",
    payload: {
      operation,
      index,
    },
  };
};

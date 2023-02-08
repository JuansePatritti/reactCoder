import React from "react";

const ItemListContainer = ({ greetings }) => {
  return <h3 style={styles.letters}>{greetings}</h3>;
};
export const styles = {
  letters: {
    color: "white",
  },
};

export default ItemListContainer;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavCategories = () => {
  const navCategories = [
    { id: 0, name: "Home", ref: "/" },
    { id: 1, name: "Jewels", ref: "category/jewelery" },
    { id: 2, name: "Men's Item", ref: "category/men's clothing" },
    { id: 3, name: "Women's Item", ref: "category/women's clothing" },
  ];
  return navCategories.map(({ id, name, ref }) => {
    return (
      <NavLink key={id} to={ref} style={styles.list}>
        {name}
      </NavLink>
    );
  });
};

export const styles = {
  list: {
    color: "white",
    margin: "1em",
    listStyleType: "none",
    textDecoration: "none",
    fontFamily: "Jost",
    fontSize: "18px",
  },
  
};

export default NavCategories;

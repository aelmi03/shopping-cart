import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = ({ ...props }) => {
  console.log(props.children);
  return (
    <NavLink
      className={({ isActive }) => {
        return "nav-link" + (!isActive ? "-unselected" : "");
      }}
      {...props}
    />
  );
};

export default StyledLink;

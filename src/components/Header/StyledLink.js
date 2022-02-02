import { NavLink } from "react-router-dom";

const StyledLink = ({ ...props }) => {
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

import React from "react";
import { AppBar, Avatar, ClickAwayListener, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { Search } from "../Search/Search";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { LandingNav } from "../LandingNav/LandingNav";
import { logout } from "../../Redux/user/actions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    maxHeight: "72px",
    backgroundColor: "#1A242F",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    bottom: "20%",
  },
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  homeIcon: {
    color: "white",
  },
  avatar: {
    margin: "10px",
  },
  subnav_links: {
    textDecoration: "none",
    color: "white",
  },
}));

export function Nav() {
  const classes = useStyles();
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openNavLink, setOpenNavLink] = React.useState(false);
  const {userdata, isAuth} = useSelector(state => state.auth)
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickNavLink = () => {
    setOpenNavLink((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClickAwayNavLink = () => {
    setOpenNavLink(false);
  };

  const queryHandler = (e) => {
    history.push(`/search?q=${query}`);
    setQuery("");
    // dispatch something on pressing enter (no clicks required)
  };

  return (
    <>     
      <LandingNav/>       
    </>
  );
}

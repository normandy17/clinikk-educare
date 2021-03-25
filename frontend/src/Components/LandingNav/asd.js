import React from "react";
import { AppBar, Avatar, ClickAwayListener, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import LanguageIcon from '@material-ui/icons/Language';
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from 'react-redux'
import { getActiveUser } from "../../Redux/user/actions";

const useStyles = makeStyles((theme) => ({
  appBar: {
      maxHeight: '72px',
      backgroundColor: '#1A242F',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      top: 0,
      bottom: '20%',
      position:"fixed"
  },
  toolbar: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  homeIcon: {
    color: "white",
  },
  avatar: {
    margin: "10px",
  },
  subnav_links: {
    color: "white",
    margin: "15px",
  },
}));

export function LandingNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {userdata, isAuth} = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(getActiveUser())
  },[])

  return (
    <div className={classes.root}>
      <AppBar id="appbar2" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={styles.navlink_wrapper_left}>
            <NavLink to="/">
              <img
                className={styles.logo}
                src="https://pngimg.com/uploads/uber/uber_PNG24.png"
                alt="prime_logo"
                height="70px"
              />
            </NavLink>
          </div>
          <div className={styles.navlink_wrapper_right}>
           
            { isAuth ? <div> {userdata.name} </div> : <NavLink
                                                        className={classes.subnav_links}
                                                        to="/"
                                                        exact>
                                                        Sign In
                                                    </NavLink>}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar>
        
      </Toolbar>
    </div>
  );
}

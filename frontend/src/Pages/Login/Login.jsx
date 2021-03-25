import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import LoginRegister from "../../Layout/LoginRegister/LoginRegister";
import { Loginreq } from "../../Redux/user/actions";
import styles from "./Login.module.css";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userdata, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(isAuth, userdata);
  useEffect(() => {
    if (isAuth) {
      history.push("/home");
    }
  }, [isAuth]);
  const handleLogin = async() => {
    const stat=await dispatch(Loginreq(email, password));
    console.log(stat)
    if(stat)history.push("/home")
  };
  return (
    <>
      {
        !isAuth ? (<LoginRegister>
          <div className={styles.form_wrapper}>
            <h2 className={styles.form_heading}>Sign-In</h2>
            <Box>
              <div className={styles.input_wrapper}>
                <label className={styles.label}>Email or mobile phone number</label>
                <input
                  type="text"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className={styles.pass_label}>
                  <label className={styles.label}>Password</label>
                  
                </div>
                <input
                  type="password"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{color:"white"}}>
                <button
                  className={styles.btn_primary}
                  onClick={() => handleLogin()}>
                  Sign-In
                </button>
              </div>
              
            </Box>
          </div>
        </LoginRegister>) : <Redirect to="/home" />
      }
    </>
  );
};